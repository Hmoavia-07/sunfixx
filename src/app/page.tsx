"use client"; // Ensures this component is client-side rendered

import React from 'react';
import { FaSun, FaBolt, FaLeaf } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url(/images/solo.jpg)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-50"></div> {/* Updated Overlay Color */}
        <div className="relative z-10 container mx-auto flex flex-col items-start justify-center h-full p-6 md:p-12">
          <motion.h1
            className="text-white text-5xl md:text-6xl font-bold leading-tight text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Harness the Power <br />of Sunshine
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Transform sunlight into savings with personalized solar solutions <br />that fit your lifestyle and ambitions.
          </motion.p>
              <motion.a
            href="#services"
            className="mt-8 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-slate-900 hover:text-white py-3 px-6 rounded-full hover:bg-opacity-80 transition-all duration-200 transform hover:scale-115 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Explore Our Services
          </motion.a>
      
        </div>
      </motion.div>

      {/* Services Section */}
      <section id="services" className="container mx-auto py-12 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary dark:text-white">Our Premier Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Solar Panel Installation', description: 'Expert installation of high-efficiency solar panels for residential and commercial properties.' },
            { title: 'Maintenance & Repair', description: 'Comprehensive maintenance services to ensure your solar systems operate at peak performance.' },
            { title: 'Consultation Services', description: 'Personalized consultations to help you choose the best solar solutions for your energy needs.' },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: 719,
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.4 }}
              className="md:p-10 px-6 py-4 bg-white dark:bg-gray-800 shadow-lg rounded-md transition-transform"
            >
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{service.title}</h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>


{/* About Us Section */}
<motion.section
  id="about"
  className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 p-12 rounded-lg text-white shadow-lg relative overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Subtle Background Glow */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-r from-blue-400 to-transparent"></div>
  
  <div className="container mx-auto relative z-10">
    <h2 className="text-5xl font-extrabold text-center drop-shadow-lg text-blue-300">
      About Us.
    </h2>
    <p className="text-lg mt-6 text-center max-w-2xl mx-auto text-blue-100">
      At SunFix, we’re committed to illuminating the future with sustainable energy solutions. Our expert team guarantees efficient solar installations and consultations, maximizing the potential of solar energy for a brighter tomorrow.
    </p>

    {/* Floating Solar Icons Animation */}
    <div className="flex justify-center mt-10 space-x-6 animate-pulse">
      <FaSun className="text-4xl text-blue-400" />
      <FaBolt className="text-4xl text-blue-300" />
      <FaLeaf className="text-4xl text-blue-200" />
    </div>
  </div>
</motion.section>

{/* Contact Section */}
<motion.section
  id="contact"
  className="bg-gray-100 dark:bg-gray-900 py-16 relative"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Background Decorative Circles */}
  <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl"></div>

  <div className="container mx-auto relative z-10">
    <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 dark:text-white">
      Get in Touch with Us
    </h2>
    <form className="space-y-6 max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 shadow-xl rounded-xl">
      {[
        { id: 'name', type: 'text', placeholder: 'Your Name', icon: 'FaUser' },
        { id: 'email', type: 'email', placeholder: 'Your Email', icon: 'FaEnvelope' },
        { id: 'message', type: 'textarea', placeholder: 'Your Message', rows: 6, icon: 'FaCommentDots' },
      ].map((field, index) => (
        <div key={index} className="relative">
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              rows={field.rows}
              className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary placeholder-transparent transition-all duration-300"
              placeholder=" "
            ></textarea>
          ) : (
            <input
              type={field.type}
              id={field.id}
              className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary placeholder-transparent transition-all duration-300"
              placeholder=" "
            />
          )}
          <label
            htmlFor={field.id}
            className="absolute left-4 top-4 text-gray-500 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary dark:peer-focus:text-primary"
          >
            {field.placeholder}
          </label>

          {/* Field Icon */}
          {field.icon && (
            <span className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 dark:text-gray-500">
              {field.icon === 'FaUser' && <FaUser />}
              {field.icon === 'FaEnvelope' && <FaEnvelope />}
              {field.icon === 'FaCommentDots' && <FaCommentDots />}
            </span>
          )}
        </div>
      ))}

      <motion.button
        className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 flex items-center justify-center space-x-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <FaPaperPlane className="text-lg" />
        <span>Send Message</span>
      </motion.button>
    </form>
  </div>
</motion.section>



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
