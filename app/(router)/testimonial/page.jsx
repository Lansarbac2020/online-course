import React from 'react';
import {testimonials} from '../../../lib/constants/indexConstants'


const  Testimonials = () => {
  return (
    <div className="mt-3 max-w-[1200px] translate-x-[2px] rounded-md bg-gray-100 py-10 p-5  relative dark:bg-[#11001f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12  dark:text-white">Testimonials</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-[#11001f] dark:border dark:border-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-white/60">{testimonial.occupation}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic dark:text-white/70">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
