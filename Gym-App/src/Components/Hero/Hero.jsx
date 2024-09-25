import React from 'react';
import { FaPlay } from 'react-icons/fa';
import HeroImg from '../../assets/dumbell.png';
import { motion } from 'framer-motion';
import { SlideRight } from '../../Utility/Animination';

const Hero = () => {
  return (
    <>
      <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
          <div className='flex flex-col justify-center py-10 md:py-0 font-playfair'>
            <div className='text-center md:text-left space-y-6'>
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className='text-5xl lg:text-6xl font-bold '>
                Gym Gives You The Perfect <br/> 
                <span className='text-primary'>Health</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className='text-gray-600 xl:max-w-[500px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing.
              </motion.p>
              <motion.div 
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className='flex justify-center gap-8 md:justify-start !mt-4'>
                <button className='primary-btn flex items-center gap-2'>Order Now</button>
                <button className='flex justify-center items-center gap-2'><FaPlay /> Watch Now</button>
              </motion.div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <motion.img
              initial={{ opacity: 0, x: 100 }}  // Start from right (100px off-screen)
              animate={{ opacity: 1, x: 0 }}    // Move to center (0px) and become visible
              transition={{ duration: 1 }}      // Animation duration of 1 second
              src={HeroImg} 
              alt="Hero Image" 
              className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
