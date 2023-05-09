import React from 'react';
import Alert from '../components/Alert';
import { useAppContext } from '../context/appContext';

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  const handleClear = (e) => {
    e.preventDefault();
    clearValues();
  };

  return (
    <div>
      <div className='bg-[#ffffff] p-10 border-[#f6f8fc] shadow-2xl  w-[60%] mx-auto md:p-20'>
        <h3 className='font-bold'>{isEditing ? 'Edit job' : 'Add job'}</h3>
        {showAlert && <Alert />}
        <form className='flex justify-between flex-wrap'>
          {/* position */}
          <div className=' md:flex justify-between gap-10'>
            <div>
              <label>Position</label>
              <input
                type='text'
                name='position'
                value={position}
                onChange={handleJobInput}
                className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
              />
            </div>
            {/* company */}
            <div>
              <label>Company</label>
              <input
                type='text'
                name='company'
                value={company}
                onChange={handleJobInput}
                className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
              />
            </div>
          </div>
          {/* position */}
          <div className='md:flex w-full gap-10'>
            <div>
              <label>Location</label>
              <input
                type='text'
                name='jobLocation'
                value={jobLocation}
                onChange={handleJobInput}
                className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
              />
            </div>

            {/* status */}
            <div>
              <label className=' w-full my-2'>Status</label>
              <select
                className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
                name='status'
                value={status}
                onChange={handleJobInput}
              >
                {statusOptions.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* job status  */}
            <div>
              <label className=' w-full my-2'>Job Status</label>
              <select
                className='block bg-[#f0f4f8] rounded-md outline-none p-2 my-2'
                name='jobType'
                value={jobType}
                onChange={handleJobInput}
              >
                {jobTypeOptions.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <button
            className='bg-[#f6f8fc] px-4 py-2 rounded-xl w-[95%] ml-3 mt-4 text-xl font-bold  hover:bg-[#aaabae] duration-150'
            type='submit'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Submit
          </button>
          <button
            className='bg-[#f6f8fc] px-4 py-2 rounded-xl w-[95%] ml-3 mt-4 text-xl font-bold  hover:bg-[#aaabae] duration-150'
            type='submit'
            onClick={handleClear}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
