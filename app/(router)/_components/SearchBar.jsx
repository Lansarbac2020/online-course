import { useState } from "react";
import { SEARCH_COURSES } from "../../_utils/GlobalApi"; // Import the search API
import { Search } from "lucide-react";
import Link from "next/link";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input
  const [searchResults, setSearchResults] = useState([]); // State for results
  const [loading, setLoading] = useState(false); // State for loader

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Avoid unnecessary API calls
    setLoading(true);
    try {
      const result = await SEARCH_COURSES(searchTerm); // Fetch search results
      setSearchResults(result?.searchCourses || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex h-[50px] bg-white dark:bg-[#1c1c1d] dark:border-white/50 gap-1 border p-2 rounded-md">
      <Search className="h-9 w-5 text-black dark:text-white" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        placeholder="Search our 100+ courses"
        className="outline-none dark:bg-[#1c1c1d] text-black dark:text-white flex-1"
      />
      <button
        className="bg-primary dark:border-white/60 border h-[46px] dark:bg-[#11001f] p-3 rounded-md translate-x-3 mr-1 translate-y-[-7.5px]"
        onClick={handleSearch} // Trigger search
      >
        Search
      </button>
      {loading && <p className="absolute top-[60px] left-0">Loading...</p>}

      {/* Results Dropdown */}
      {searchResults.length > 0 && (
        <div className="absolute top-[60px] left-0 bg-white dark:bg-[#1c1c1d] border w-full max-h-[200px] overflow-y-auto rounded-md shadow-md z-10">
          {searchResults.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
            >
              <div>
                <p className="font-bold">{course.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {course.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
