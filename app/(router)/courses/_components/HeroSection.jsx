import React from 'react'


const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          {/* <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Preparer votre
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              avec des cours professionels
            </span>
          </h1> */}
          <p className="mt-10 text-lg text-center dark:text-white/70 text-neutral-500 max-w-4xl">
          Explorez, apprenez et créez vos propres projets. Ouvrez les portes de votre avenir grâce à une éducation de qualité
          </p>
          <div className="flex justify-center my-10">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-primary py-3 px-4 mx-3 rounded-md"
            >
              Start for free
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
              Documentation
            </a>
          </div>
          <div className="flex mt-10 justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-primary shadow-sm shadow-blue-400 mx-2 my-4"
            >
              <source src='/video1.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-primary shadow-sm shadow-blue-400 mx-2 my-4"
            >
              <source src='/video2.mp4' type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
}

export default HeroSection