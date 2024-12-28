import  { useState, useEffect } from "react";

const InfiniteTimer = () => {

  const birthDate = new Date(2003, 8, 14); 
  const currentDate = new Date();
  const initialMilliseconds = currentDate.getTime() - birthDate.getTime();
  const [time, setTime] = useState(initialMilliseconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);
   
    return () => clearInterval(interval);
  }, []);

  const formatTime = (timeInMillis: number) => {
    const milliseconds = timeInMillis % 1000;
    const totalSeconds = Math.floor(timeInMillis / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const totalDays = Math.floor(totalHours / 24);
    const years = Math.floor(totalDays / 365);
    const days = totalDays % 365;

    return `${years}.${days}${hours}${minutes}${seconds}${milliseconds}`;
  };

  return (
    <>
      <span>Age: {formatTime(time)}</span>
      <span>Moving fast, isn't it?</span>
    </>
  );
};

export default InfiniteTimer;
