import React, { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useAppContext } from '../context/appContext';

export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();

  return (
    <div>
      <h4 className='text-xl  text-center'>Monthly Applications</h4>
      <div className='flex justify-center '>
        <button
          className=' bg-[#ffffff] px-4 py-2 rounded-xl  ml-3 mt-4 text-2xl font-bold  hover:bg-[#aaabae] duration-150'
          onClick={() => setBarChart(!barChart)}
        >
          {barChart ? 'Area Chart' : 'Bar Chart'}
        </button>
      </div>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
}
