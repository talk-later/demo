import React, { useState, useEffect } from 'react';

const Timer = (props) => {
  const { onTimerStart, onTimeEnd, timer, disabled = false } = props   
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isEndIng, setIsEnding] = useState(false)

  useEffect(() => {
    let Timer;

    if (isRunning) {
      const startTime = new Date().getTime();

      Timer = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedMilliseconds = currentTime - startTime;
        setMilliseconds(elapsedMilliseconds);
      }, 10); // 每10毫秒更新一次
    }

    return () => clearInterval(Timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    onTimerStart && onTimerStart()
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsEnding(true)
    onTimeEnd && onTimeEnd(milliseconds)
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const remainingMilliseconds = ms % 1000;

    // 使用padStart确保分、秒、毫秒都是两位数，不够补0
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(Math.floor(remainingMilliseconds / 10)).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };

  return (
    <div>
      <h1>计时器: {formatTime(milliseconds)}</h1>
      {isRunning ? <button onClick={handleStop}>结束计时</button> : <button disabled={disabled || isEndIng} onClick={handleStart}>开始计时</button> }
    </div>
  );
};

export default Timer;
