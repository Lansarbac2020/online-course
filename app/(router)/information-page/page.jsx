import React from 'react'

const page = () => {
  return (
    <div className="mt-[100px] md:mt-[130px] min-h-screen bg-white dark:bg-[rgb(5,7,20)] text-gray-900 dark:text-white">
    <div className="container mx-auto p-8">
      {/* Heading Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-primary dark:text-white">Welcome to IKA'KALANSO</h1>
        <p className="text-xl mt-4 text-gray-600 dark:text-gray-400">
          We are currently under development, but we're excited to share our vision with you!
        </p>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">About Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Our platform aims to revolutionize the way we interact with online education and digital solutions.
          We provide a seamless experience that allows you to access high-quality resources, courses, and learning tools
          to enhance your skills and knowledge in the most efficient way.
        </p>
        <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">
          Currently, our team is working hard to bring new features, content, and integrations to make this platform the best it can be.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Key Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 dark:text-gray-300">
          <li>Wide range of courses available for various skill levels</li>
          <li>User-friendly interface and navigation</li>
          <li>Personalized learning experience tailored to your needs</li>
          <li>Regular updates with new content and features</li>
          <li>24/7 customer support to assist with any issues</li>
        </ul>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-100 dark:bg-[rgb(5,7,20)] dark:border dark:border-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          If you have any questions or need assistance, feel free to reach out to us. We're here to help!
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <span className="material-icons">Email :</span>
            <a href="mailto:ikalanso.help@gmail.com" className="text-lg">
            ikalanso.help@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <span className="material-icons">Phone :</span>
            <span className="text-lg">+90 541-162-22-94</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <span className="material-icons">Location :</span>
            <span className="text-lg">BAMAKO/MALI</span>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default page