import React, { useState } from 'react';
import Alert from '../components/Alert';

import { useAppContext } from '../context/appContext';
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastname);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      // test and remove temporary
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <div>
      <div className='bg-[#ffffff] p-10 border-[#f6f8fc] shadow-2xl  w-[60%] mx-auto md:p-20 font-roboto'>
        <h1 className='font-bold'>Profile</h1>
        {showAlert && <Alert />}
        <form
          className='flex justify-between flex-wrap'
          onSubmit={handleSubmit}
        >
          <div>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none  my-2 p-2'
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type='text'
              name='location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
            />
          </div>
          <button
            className='bg-[#f6f8fc] px-4 py-2 rounded-xl w-[95%] ml-3 mt-4 text-xl font-bold  hover:bg-[#aaabae] duration-150'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
