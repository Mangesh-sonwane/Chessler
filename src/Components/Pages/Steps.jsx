import React from 'react';
import { SiLichess } from 'react-icons/si';
import { RiSwordLine } from 'react-icons/ri';
import { FaCoins } from 'react-icons/fa';

const Steps = () => {
  const stepsInfo = [
    {
      number: 1,
      icon: <SiLichess className='h-10 w-auto text-golden' />,
      title: 'Login',
      description:
        'With your lichess account to sync your rankings and earnings',
    },
    {
      number: 2,
      icon: <RiSwordLine className='h-10 w-auto text-golden' />,
      title: 'Challenge',
      description:
        'your favourite player or friends or simply create an open challenge',
    },
    {
      number: 3,
      icon: <FaCoins className='h-10 w-auto text-golden' />,
      title: 'Earn',
      description: 'coins and use them for future matches',
    },
  ];
  return (
    <div className='flex-1 md:w-auto w-screen text-white px-5 md:px-20 xl:px-40 py-10 '>
      <div className='flex flex-col items-center gap-20 my-40'>
        <h2 className='text-2xl font-bold'>How Does it Works</h2>
        <div className='class="flex flex-col md:flex-row gap-16 justify-around w-full"'>
          <ul className='flex justify-center gap-16 w-full m-auto'>
            {stepsInfo.map((steps, i) => {
              return (
                <li
                  key={i}
                  className='bg-golden/20 rounded-lg p-5 py-8 w-80 relative flex flex-col items-center gap-4'
                >
                  <span
                    className='absolute left-2 -top-10 text-6xl font-extrabold text-golden/30'
                  >
                    {steps.number}
                  </span>
                  <div className='flex flex-col items-center gap-6'>
                    <div className='flex items-center gap-2'>
                      {steps.icon}
                      <p className='text-white text-3xl font-bold'>
                        {steps.title}
                      </p>
                    </div>
                    <p className='text-white text-sm text-center'>
                      {steps.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steps;
