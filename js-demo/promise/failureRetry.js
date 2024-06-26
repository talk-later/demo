/**
 * 尝试执行一个操作，如果失败，则200ms后重试，直到成功或达到最大重试次数。
 * @param {Function} operation - 要执行的操作，应该返回一个Promise。
 * @param {number} maxRetries - 最大重试次数，默认为3。
 * @returns {Promise} - 返回一个Promise
 */
const failureRetry = (operation, maxRetries = 3) => {
  let retries = 0;
  let defaultDelay = 200;
  return new Promise((resolve, reject) => {
      const executeOperation = () => {
          operation().then(res => {
              resolve(res)
          }).catch(err => {
              retries++
              if (retries >= maxRetries) {
                  reject(err)
              }
              setTimeout(executeOperation, defaultDelay * retries)
          })
      }
      executeOperation()
  })
}


async function simulateOperation() {
// 模拟可能失败的异步操作
const randomNum = Math.random();
console.log(randomNum)
if (randomNum < 0.8) {
  // 80% 的概率成功
  return "操作成功";
} else {
  throw new Error("操作失败");
}
}

// 调用重试函数
failureRetry(simulateOperation).then(res => {
console.log(res);
}).catch(err => {
console.log('最终失败:', err);
})
