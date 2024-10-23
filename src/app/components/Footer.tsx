import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-lg font-semibold">&copy; {new Date().getFullYear()} SunFix designed by <i className='hover:underline'>Hmoavia.07</i> - Empower with Sunshine</p>
        
        {/* Social Media Links */}
       <div className=' text-center flex justify-center gap-4 '>
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
       </div>
        </div>
      
    </footer>
  );
};

export default Footer;
 