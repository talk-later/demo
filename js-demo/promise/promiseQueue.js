const promiseQueue = (tasks, concurrency = 5) => {
  const result = [];
  const error = [];
  let currentCount = 0;
  return new Promise((resolve) => {
    const queue = () => {
      while (currentCount < concurrency && tasks.length > 0) {
        // 取出第一个任务并执行，currentCount++
        const task = tasks.shift();
        currentCount++;
        console.log('currentCount', currentCount, 'tasks', tasks.length)
        task()
          .then((res) => {
            result.push(res);
          })
          .catch((err) => {
            error.push(err);
          })
          .finally(() => {
            // 任务执行完成，currentCount--
            // 还有任务递归继续执行， 否则等待进行中的任务执行完currentCount为0结束
            currentCount--;
            if (tasks.length > 0) {
              queue();
            } else if (currentCount === 0) {
              resolve({ result, error });
            }
          });
      }
    };

    queue();

    // 监听tasks数组变化，如果有新的任务添加，则尝试继续处理队列
    tasks.push = function (...newTasks) {
      Array.prototype.push.apply(this, newTasks);
      if (currentCount < concurrency) {
        queue();
      }
    };
  });
};

let tasks = []

for(let i = 0; i < 20; i++) {
    tasks.push(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('ysc' + i)
            }, 500 * i)
        })
    })
}

promiseQueue(tasks, 5).then((results) => console.log("结果:", results))

setTimeout(() => {
    tasks.push(...tasks.slice(0, 5))
}, 2000)
