import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useGlobalContext } from '../../context';

const Dashboard = () => {
  const { user, setUser } = useGlobalContext();

  return (
    <div className='flex justify-center items-center md: w-auto  px-5 md:px-20 xl:px-40 py-10  '>
      <div className='flex flex-col items-center gap-7 my-40  bg-gray-900 p-5 rounded-lg '>
        <h2 className='text-5xl bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-500 p-5 font-bold'>
          Welcome to the Dashboard {user.username}
        </h2>
        <button
          onClick={() => {
            setUser(null);
            localStorage.setItem('token', null);
            window.location.href = '/';
          }}
          className='flex justify-center gap-2 items-center space-x-3 drop-shadow-2xl bg-golden text-primary  font-bold hover:bg-yellow-400 py-3 px-5 rounded-md '
        >
          Log Out
          <FiLogOut />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
