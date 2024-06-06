import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react'; // Import only the required icon
import Link from 'next/link';

const teamMembers = [
  { id: 1, name: 'Bacoro Lansar', position: 'PDG', photo: '/lansar.jpg', url: 'https://www.linkedin.com/in/johndoe' },
  { id: 2, name: 'Jane Smith', position: 'CTO', photo: '/jane.jpg', url: 'https://www.linkedin.com/in/janesmith' },
  { id: 3, name: 'Mike Johnson', position: 'CFO', photo: '/mike.jpg', url: 'https://www.linkedin.com/in/mikejohnson' },
  { id: 4, name: 'Emily Davis', position: 'COO', photo: '/emily.jpg', url: 'https://www.linkedin.com/in/emilydavis' },
];

function OurTeam() {
  return (
    <div className="mt-5 p-3  translate-x-5 rounded-md bg-white py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Notre Equipe</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 justify-center">
          {teamMembers.map(member => (
            <div key={member.id} className="flex flex-col items-center p-4 bg-gray-100 shadow-md rounded-md hover:cursor-pointer hover:shadow-lg transition-shadow duration-300">
          
                <div>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                  <Link 
                    target="_blank"
                   
                    className="mt-2 text-blue-400"
                    href={member.url}
                    aria-label={`Follow ${member.name} on LinkedIn`}
                  >
                    <Linkedin size={24} />
                  </Link>
                </div>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
