import React from 'react';

const useDate = () => {
  const now = new Date();

  const day = now.getDate();
  const year = now.getFullYear();
  const monthName = now.getMonth();
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = months[monthName];
  
  return {day,year,month};
};

export default useDate;