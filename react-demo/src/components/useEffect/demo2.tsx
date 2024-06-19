import React, { useEffect, useState } from 'react';

function App() {
  const [state] = useState(0);

  // render 方法调用时被触发
  console.log(1);

  const flag = Date.now();
  while (Date.now() - flag < 100) {
    // block 阻塞
  }

  // effect 中打印
  useEffect(() => {
    console.log(2);
  }, [state]);

  // micro task 中 log
  Promise.resolve().then(() => console.log(3));

  // macro task 中 log
  setTimeout(() => console.log(4), 0);

  return <div>useEffect 是如何被执行？</div>;
}

export default App;
