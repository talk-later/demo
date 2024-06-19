import React, { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(0);

  // App Render Log
  console.log(1);

  // useEffect log
  useEffect(() => {
    console.log(2);
  }, [state]);

  // micro callback log
  Promise.resolve().then(() => console.log(3));

  // macro callback log
  setTimeout(() => console.log(4), 0);

  return (
    <div>
      <>
        <div onMouseEnter={() => setState(10)}>点击更新 State {state}</div>
      </>
    </div>
  );
}

export default App;
