import React from 'react';
import { useAppContext } from '../context/appContext';

const Navbar = () => {
  const { logoutUser } = useAppContext();

  return (
    <div className='flex items-center bg-[#f6f8fc] w-screen justify-center gap-20 p-4'>
      {/* <div className='bg-[#eaf1fb] p-2 rounded-xl'></div> */}
      {/* <button onClick={logoutUser}> Logout</button> */}
    </div>
  );
};

export default Navbar;
