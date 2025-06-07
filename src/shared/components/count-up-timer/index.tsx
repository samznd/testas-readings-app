import { useState, useEffect, useRef } from 'react';
import Button from '../ui/button';

const CountUpTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const formatTime = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(
      2,
      '0'
    )}`;
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setSeconds(0);
  };

  return (
    <div className='my-1'>
      <h2 className='text-xl'>{formatTime(seconds)}</h2>
      <div className='flex flex-wrap items-center gap-2'>
        <Button
          className='w-16 !p-2 !bg-[#efefef] !text-[#404549] border border-[#404549] text-sm'
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </Button>
        <Button
          className='w-16 !p-2 !bg-[#efefef] !text-[#404549] border border-[#404549] text-sm'
          onClick={handlePause}
          disabled={!isRunning}
        >
          Pause
        </Button>
        <Button
          className='w-16 !p-2 !bg-[#efefef] !text-[#404549] border border-[#404549] text-sm'
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default CountUpTimer;
