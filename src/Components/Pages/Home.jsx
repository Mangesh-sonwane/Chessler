import React from 'react';
import Board from '../../Assets/image.webp';
import Knight from '../../Assets/Knight.png';
import Queen from '../../Assets/queen.png';
import Pawn from '../../Assets/pawn.png';

const Home = () => {
  return (
    <div className='flex-1 md:w-auto w-screen text-white px-5 md:px-20 xl:px-40 py-10 '>
      <div className='text-white p-10 md:px-40 flex flex-col-reverse md:flex-row justify-between w-full gap-20 '>
        <div className='flex flex-col justify-center backdrop-blur-lg flex-1'>
          <h1 className=' text-3xl md:text-6xl font-extrabold'>Play</h1>
          <br />
          <h1 className=' text-3xl md:text-6xl font-extrabold'>
            Get <br />
            Paid.
          </h1>
          <div className='my-8'>
            <p>Join now to get $5 and get started</p>
          </div>
        </div>
        {/* here first side is complete */}
        <div className=''>
          <div className='slideContent h-full'>
            <div className='relative md:mt-10'>
              <img
                alt='board'
                src={Board}
                width='600'
                height='300'
                loading='lazy'
              />
              <img
                src={Knight}
                alt='Knight'
                className='absolute -top-5 right-24 md:-top-10 md:right-56 -rotate-12 hover:rotate-0 h-20 w-20 md:h-40 md:w-40'
              />
              <img
                src={Queen}
                alt='Queen'
                className='absolute top-10 right-10 md:top-10 md:left-20 -rotate-12 hover:rotate-0 h-20 w-20 md:h-40 md:w-40 '
              />
              <img
                src={Pawn}
                alt='Pawn'
                className='absolute -top-5 right-24 md:top-10 md:left-15 -rotate-12 hover:rotate-0 h-20 w-20 md:h-40 md:w-40'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
