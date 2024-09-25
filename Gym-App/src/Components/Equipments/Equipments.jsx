import React from 'react';
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft } from '../../Utility/Animination'
import { motion } from "framer-motion";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GrYoga />, 
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    icon: <FaDumbbell />, 
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "/",
    icon: <GiGymBag />, 
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <div className='container py-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair'>
        <div className='space-y-6 p-6'>
          <h1 className='text-3xl md:text-4xl font-bold'>What We Offer For You</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div> 
        {
          EquipmentData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)} 
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className='bg-[#fbfbfb] space-y-4 p-6 hover:bg-white rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400'
              >
                <div className='text-4xl'>{item.icon}</div>
                <p className='text-2xl font-semibold'>{item.title}</p>
                <p className='text-gray-600'>{item.desc}</p>
              </motion.div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Equipments;
