import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Basic Plan',
      price: '$30/month',
      features: ['Access to gym', 'Free WiFi', 'Locker Room', 'Free Water'],
    },
    {
      name: 'Standard Plan',
      price: '$50/month',
      features: ['All Basic Plan features', 'Personal Trainer', 'Group Classes', 'Sauna Access'],
    },
    {
      name: 'Premium Plan',
      price: '$80/month',
      features: ['All Standard Plan features', 'Private Trainer', 'VIP Lounge', 'Diet Consultation'],
    },
  ];

  // Animation variants for sliding from right to left
  const slideVariant = {
    hidden: { opacity: 0, x: 200 }, // Start off-screen (to the right)
    visible: { opacity: 1, x: 0 },  // Slide into position
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Gym Membership Plans</h2>
        <p className="text-center text-gray-600 mb-12">Choose the plan that suits your fitness goals</p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 shadow-lg rounded-lg text-center"
              // Applying the slide animation
              variants={slideVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.3 }} // Adding a delay for each card
            >
              <h3 className="text-2xl font-bold mb-4 text-teal-600">{plan.name}</h3>
              <p className="text-4xl font-bold text-primary mb-6">{plan.price}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-teal-600 transition duration-200">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
