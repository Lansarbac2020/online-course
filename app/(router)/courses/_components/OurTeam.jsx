import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import {teamMembers} from '../../../../lib/constants/indexConstants'

const OurTeam = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate group of educators and technologists committed to transforming online learning.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-[rgb(5,7,20)]  rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay with social links */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={member.social.linkedin} className="text-white hover:text-blue-400 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={member.social.twitter} className="text-white hover:text-blue-400 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href={member.social.github} className="text-white hover:text-black transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold dark:text-white text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className=" dark:text-white text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;