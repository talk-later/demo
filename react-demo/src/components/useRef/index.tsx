import React, { forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef<any>((props, ref) => {
  const {continer} = props
  
  console.log(continer)

  return <button >Click me</button>;
});

export default function Parent() {
  const ref = React.useRef<any>(null);
  return (
    <div ref={ref}>
      <Child continer={ref.current} />
      {/* <button onClick={() => ref.current?.increment()}>
        Call child's method
      </button> */}
    </div>
  );
}