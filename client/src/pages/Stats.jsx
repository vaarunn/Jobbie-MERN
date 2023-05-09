import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import StatsContainer from '../components/StatsContainer';
import ChartsContainer from '../components/ChartsContainer';
import ClipLoader from 'react-spinners/ClipLoader';

const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();
  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return (
      <div className=' w-full h-full flex items-center justify-center'>
        <ClipLoader color='#52bfd9' size={100} />;
      </div>
    );
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
