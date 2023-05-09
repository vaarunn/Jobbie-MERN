import { useAppContext } from '../context/appContext';
import StatItem from './StatItem';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling size={30} />,
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck size={30} />,
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug size={30} />,
    },
  ];

  return (
    <div className='w-[80%] md:flex justify-around font-roboto'>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </div>
  );
};

export default StatsContainer;
