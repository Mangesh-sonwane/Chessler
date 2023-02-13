import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { SiLichess } from 'react-icons/si';
import { useGlobalContext } from '../../context';

const code_verifier = '45f63b7c59c587468a7d36dc2c42ab7e9d96700b764b0';
const state =
  '6U8ejZ83dlkxKcMhgYbWztvL1q9.Q_A&code_challenge=4Rf7UEwZplIjmAwHUwcitzp9qz8zv98uYflt-tBmwLc';

const redirectUrl = `https://lichess.org/oauth?response_type=code&client_id=chessler&redirect_uri=http://localhost:3000/dashboard&scope=email:read challenge:read challenge:write tournament:write team:write &state=${state}&code_challenge_method=S256&code_verifier=${code_verifier}`;

const Navbar = () => {
  const { user } = useGlobalContext();
  localStorage.setItem('state', state);
  localStorage.setItem('code_verifier', code_verifier);

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
              defaultValue="Search..."            />
          </div>
          <a
            className='font-semibold lg:text-xl text-white hover:text-golden hover:underline underline-offset-4 duration-500 ease-in'
            href='/leaderboard'
          >
            Leaderboard
          </a>
          {user ? (
            <Link to='/dashboard'></Link>
          ) : (
            <button
              onClick={() => window.open(redirectUrl)}
              className='flex justify-center items-center gap-2 bg-golden text-primary text-sm  font-bold  cursor-pointer hover:bg-yellow-400 py-3 px-3 rounded-md '
            >
              <span>Login with</span>
              <SiLichess className='h-5 w-5' />
            </button>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
