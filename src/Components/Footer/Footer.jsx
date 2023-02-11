import React from 'react';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className='flex flex-col gap-40 items-center justify-center pt-20 pb-6'>
        <div className='flex flex-col items-center gap-10 text-white'>
          <p className='text-2xl font-bold'>Connect With Us</p>
          <div className='flex gap-10'>
            <FaTwitter className='w-10 h-auto cursor-pointer' />
            <FaInstagram className='w-10 h-auto cursor-pointer' />
            <FaDiscord className='w-10 h-auto cursor-pointer' />
          </div>
        </div>
        <p className='text-gray-400'>© All rights reserved Gamut Inc.</p>
      </footer>
    </div>
  );
};

export default Footer;
