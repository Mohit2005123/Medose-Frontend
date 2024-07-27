import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import MyGlobe from './MyGlobe';

const Hero = () => {
  return (
    <div>
      <section
        className="relative flex items-center justify-center h-[850px] bg-cover bg-top bg-fixed"
        style={{ backgroundImage: `url(/images/backgroundImage.jpg)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="container mx-auto text-center relative z-10">
          {/* MyGlobe Component */}
          {/* <div className="flex justify-center mb-8">
            <MyGlobe />
          </div> */}
          <h3 className="text-gray-800 text-2xl">
            <Typewriter
              words={['Best Options for you']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
          <h1 className="text-gray-900 text-5xl font-bold italic py-5 animate-bounce">
            <Typewriter
              words={['A healthy dose of solutions']}
              loop={1}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-gray-700 text-xl mb-8 animate-fade-in">
            Your health, our priority. Discover solutions that work best for you.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/healthrecords"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Analyse your Health Stats
            </Link>
            <Link
              to="/blog"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Checkout Our Blog
            </Link>
            <Link
              to="/doctors"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Connect with our Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

