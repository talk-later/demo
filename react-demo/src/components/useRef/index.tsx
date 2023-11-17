import React, { forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef<any>((props, ref) => {
  useImperativeHandle(ref, () => ({
    increment: () => {
      count++;
      console.log(count);
    },
  }));

  let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  };

  return <button ref={ref} onClick={increment}>Click me</button>;
});

export default function Parent() {
  const ref = React.useRef<any>(null);
  return (
    <>
      <Child ref={ref} />
      <button onClick={() => ref.current?.increment()}>
        Call child's method
      </button>
    </>
  );
}