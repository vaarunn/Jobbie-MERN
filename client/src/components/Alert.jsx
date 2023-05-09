import React from 'react';
import { useAppContext } from '../context/appContext';
const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      className={`${
        alertType === 'danger' ? 'bg-red-400' : 'bg-green-400'
      } p-2 rounded-md text-center my-5`}
    >
      {alertText}
    </div>
  );
};

export default Alert;
