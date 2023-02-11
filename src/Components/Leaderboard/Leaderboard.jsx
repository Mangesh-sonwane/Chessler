import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import trophy from '../../Assets/trophy.svg';
import king from '../../Assets/king.svg';

const Leaderboard = () => {
  const [leaders, setLeader] = useState([]);
  async function getUsers() {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setLeader(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className='min-h-screen flex flex-col pt-10 gap-10 font-poppins overflow-hidden bg-piecesgrp bg-origin-content bg-opacity-20 items-center'>
      <div className='flex-1 w-screen px-2 md:w-auto text-white pb-10'>
        <div className='bg-gray-700/50 flex-1 p-4 md:p-8 rounded-lg'>
          <div className='flex justify-between '>
            <h1 className='text-2xl font-bold'>Leaderboard</h1>
            <div className='relative text-white text-sm'>
              <button
                className=' w-max cursor-pointer rounded-lg bg-zinc-800 p-1 text-golden'
                type='button'
              >
                <span className='flex items-center gap-2 p-2 '>
                  <span>Weekly</span>
                  <FaChevronDown className='w-5 h-5' />
                </span>
              </button>
            </div>
          </div>
          <hr className='border-1 border-gray-400 my-2' />
          {leaders.map((leader) => {
            return (
              <div className=' p-2 md:p-1 mt-3  rounded-lg flex flex-col items-center gap-3 '>
                <div className='backdrop-blur-sm divide-y-2 divide-gray-400 flex flex-col items-center gap-5'>
                  <div className='flex flex-wrap  items-center justify-between gap-2 md:gap-40 px-2 md:px-6 py-3 w-full '>
                    <div className='flex w-60 md:w-max items-center justify-between md:gap-10  '>
                      <img src={trophy} alt='' className='h-10 w-10' />
                      <div className='class="h-10 w-10 overflow-hidden rounded-full object-contain '>
                        <img src={king} alt='' className='' />
                      </div>
                      <p className='text-lg font-bold text-golden/70 text-ellipsis md:w-60 overflow-hidden '>
                        {leader.username}
                      </p>
                    </div>
                    <p className='font-extrabold tabular-nums tracking-wider'>
                      {leader.id}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
