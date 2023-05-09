import React from 'react';
import moment from 'moment';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Job = ({
  _id,
  position,
  jobLocation,
  jobType,
  company,
  createdAt,
  status,
}) => {
  const { setEditJob, deleteJob } = useAppContext();

  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');

  return (
    <div className='bg-[#ffffff] font-roboto p-10 border-[#f6f8fc] shadow-2xl w-[80%] lg:w-[90%] rounded-xl'>
      <header className='flex'>
        <div className='bg-[#f6f8fc] p-8 m-4 rounded-full'>
          {company.charAt(0)}
        </div>
        <div className='m-4'>
          <p>{company}</p>
          <p>{position}</p>
        </div>
      </header>

      {/* center */}
      <div className=' p-4'>
        <div className='md:flex justify-between'>
          <div className='flex md:justify-center items-center  gap-2'>
            <FaLocationArrow />
            <p className=' '>{jobType}</p>
          </div>
          <div className='flex items-center  gap-2'>
            <FaCalendarAlt />
            <p>{date}</p>
          </div>
        </div>

        <div className='md:flex justify-between'>
          <div className='flex  items-center gap-2'>
            <FaBriefcase />
            <p>{jobLocation}</p>
          </div>
          <div>{status}</div>
        </div>
      </div>

      <footer className='p-4'>
        <div className='flex gap-4'>
          <Link
            to='/dashboard/addJob'
            onClick={() => setEditJob(_id)}
            className='bg-[#f6f8fc] px-4 py-2 rounded-xl w-[95%] ml-3 mt-4 text-xl font-bold  hover:bg-[#aaabae] duration-150  text-center'
          >
            Edit
          </Link>

          <button
            onClick={() => deleteJob(_id)}
            className='bg-[#f6f8fc] px-4 py-2 rounded-xl w-[95%] ml-3 mt-4 text-xl font-bold  hover:bg-[#aaabae] duration-150 '
          >
            Delete
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Job;
