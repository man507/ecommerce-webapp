import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='my-10 mt-40 text-sm'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14'>
        
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Charlie Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia distinctio quidem perferendis autem beatae expedita voluptatem nisi animi. Nisi corrupti expedita.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 676-766-999</li>
            <li>contact@charlie.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className='my-6 border-gray-300' />
      <p className='py-5 text-sm text-center text-gray-600'>
        © 2025 charlie.com — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;