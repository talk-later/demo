import React, { forwardRef, useEffect, useImperativeHandle, useLayoutEffect } from 'react';

const Child = forwardRef((props:any, ref: any) => {
  const { continer } = props
  const [state, setState] = React.useState(0)
  
  console.log(continer)

  useEffect(() => {
    debugger
  }, [state])

  useLayoutEffect(() => {
    debugger
  }, [state])

  useImperativeHandle(ref, () => {
    return {
      increment: () => {
        console.log('increment')
        setState(state + 1)
      }
    }
  })

  return <button >Click me{state}</button>;
});

export default function Parent() {
  debugger

  const ref = React.useRef<any>(null);

  useEffect(() => {
    debugger
  }, [])

  useLayoutEffect(() => {
    const a = ref
    debugger
  }, [])

  return (
    <div >
      <button onClick={() => ref.current?.increment()}>
        Call child's method
      </button>
      <Child ref={ref} />
      
    </div>
  );
}