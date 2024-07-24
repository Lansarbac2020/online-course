import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    occupation: 'Développeur Web',
    message: 'This platform has completely changed my life. The resources and support are amazing!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Jane Smith',
    occupation: 'Designer UX/UI',
    message: 'I have learned so much and feel more confident in my skills. Highly recommend to everyone!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Sam Wilson',
    occupation: 'Chef de projet',
    message: 'The community here is incredibly supportive and the content is top-notch.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  }
];

const Testimonials = () => {
  return (
    <div className=" mt-[90px] bg-gray-100 dark:bg-[#11001f] lg:-translate-x-[12%] md:-translate-x-[12%] sm:mr-4 sm:ml-4 text-center py-12">
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
