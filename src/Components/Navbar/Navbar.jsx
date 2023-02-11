import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { SiLichess } from 'react-icons/si';

const Navbar = () => {
  return (
    <div>
    <nav className='flex flex-row justify-around w-full gap-5 pt-12 pb-4'>
      <a
        className='text-xl lg:text-3xl font-bold bg-gradient-to-r from-golden to-white bg-clip-text text-transparent text-center m-auto cursor-pointer'
        href='/'
      >
        Chesslers
      </a>
      <div className='flex gap-5 mr-20 justify-around'>
        <div className='flex items-center gap-2 bg-zinc-800		  text-gray-500 px-2 py-1 rounded-xl mr-20'>
          <BiSearch />
          <input
            type='text'
            placeholder='search'
            className='bg-transparent outline-none'
            value=''
          />
        </div>
        <a
          class='font-semibold lg:text-xl text-white hover:text-golden hover:underline underline-offset-4 duration-500 ease-in'
          href='/leaderboard'
        >
          Leaderboard
        </a>
        <a
          href='/'
          className='flex items-center justify-center gap-2 bg-golden text-primary text-sm w-32 px-3 font-bold  rounded-lg cursor-pointer'
        >
          <p>Login With</p>
          <SiLichess />
        </a>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
