import React from 'react';
import Image from 'next/image';
import { Linkedin } from 'lucide-react'; // Import only the required icon
import Link from 'next/link';

const teamMembers = [
  { id: 1, name: 'Bacoro Lansar', position: 'PDG', photo: '/lansar.jpg', url: 'https://www.linkedin.com/in/johndoe' },
  { id: 2, name: 'Jane Smith', position: 'Software Developper', photo: '/software.jpg', url: 'https://www.linkedin.com/in/janesmith' },
  { id: 3, name: 'Mike Johnson', position: 'CFO', photo: '/mikejohnson.jpg', url: 'https://www.linkedin.com/in/mikejohnson'},
  { id: 4, name: 'Emily Davis', position: 'Educator', photo: '/team21.jpg', url: 'https://www.linkedin.com/in/emilydavis' },
];

function OurTeam() {
  return (
    <div className="mt-5 p-3  translate-x-[2px] rounded-md bg-white py-10 dark:bg-[#11001f]">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Notre Equipe</h2>
        <p className='p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum deserunt adipisci autem tenetur ullam rerum ipsa aperiam laboriosam harum quia quo porro corrupti inventore qui id voluptatem, voluptate sequi suscipit.</p>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-6 justify-center">
          {teamMembers.map(member => (
            <div key={member.id} className="flex flex-col items-center p-4 hover:scale-105 transform transition duration-300 bg-gray-100 dark:bg-[#11001f] dark:border dark:border-white/70  shadow-md rounded-md hover:cursor-pointer hover:shadow-lg">
          <div>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-gray-600 dark:text-white/50">{member.position}</p>
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
