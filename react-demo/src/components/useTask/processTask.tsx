import React from "react";

/**
 *
 * @param tasks 任务列表
 * 支持传入任务列表，任务依次执行，任务具有原子性即任务中间不能中断，支持任务等暂停和继续
 */
const processTask = (tasks) => {
  let currentTaskIndex = 0;
  let result: any = [];
  let isRunning = false;
  return {
    start: () => {
      return new Promise(async (resolve, reject) => {
        isRunning = true;
        while (currentTaskIndex < tasks.length) {
          const task = tasks[currentTaskIndex];
          const res = await task();
          result.push(res);
          currentTaskIndex++;
          if (!isRunning) return;
        }
        if (result.length === tasks.length) {
          isRunning = false;
          resolve(result);
        }
      });
    },
    pause: () => {
      isRunning = false;
    },
  };
};

export default function ProcessTask() {
  const tasks = [
    () => new Promise((resolve) => {
        console.log('1执行')
        setTimeout(() => {
            resolve(1)
            console.log('1执行完毕')
        }, 1000)
    }),
    () => new Promise((resolve) => {
        console.log('2执行')
        setTimeout(() => {
            resolve(2)
            console.log('2执行完毕')
        }, 1000)
    }),
    () => new Promise((resolve) => {
        console.log('3执行')
        setTimeout(() => {
            resolve(3)
            console.log('3执行完毕')
        }, 1000)
    }),
    () => new Promise((resolve) => {
        console.log('4执行')
        setTimeout(() => {
            resolve(4) 
            console.log('4执行完毕')
        }, 1000)
    }),
    () => new Promise((resolve) => {
        console.log('5执行')
        setTimeout(() => {
            resolve(5) 
            console.log('5执行完毕')
        }, 1000)
    }),
  ];
  const { start, pause } = processTask(tasks);
  const handleStart = () => {
    start().then((res) => {
      console.log(res);
    });
  };
  const handlePause = () => {
    pause();
  };

  return (
    <div>
      <button onClick={handleStart}>开始任务</button>
      <button onClick={handlePause}>暂停任务</button>
    </div>
  );
}
