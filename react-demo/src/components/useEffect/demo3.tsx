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
      <button onClick={() => setState((state) => state + 1)}>
        点击更新 State
      </button>
    </div>
  );
}

export default App;
