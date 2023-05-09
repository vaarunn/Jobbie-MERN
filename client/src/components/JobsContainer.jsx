import React, { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useAppContext } from '../context/appContext';
import Job from './Job';

const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <div className=' w-full h-full flex items-center justify-center'>
        <ClipLoader color='#52bfd9' size={100} />;
      </div>
    );
  }

  if (jobs.length === 0) {
    return <h1>No jobs to display...</h1>;
  }

  return (
    <div>
      <h5 className='font-bold ml-[2%] mt-[5%] text-3xl'>
        {totalJobs} {jobs.length > 1 ? 'jobs' : 'job'} found
      </h5>
      <div className='grid gap-5  md:grid-cols-2   p-8'>
        {jobs.map((job) => {
          const { _id } = job;
          return <Job key={_id} {...job}></Job>;
        })}
      </div>

      {/* pagination button  */}
    </div>
  );
};

export default JobsContainer;
