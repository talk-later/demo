import React from "react";
export const debounce = (fn, delay, immediate = false) => {
  let timer: any = null;
  return function (...arg) {
    const context = this;
    const callNow = immediate && !timer;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) fn.apply(context, arg);
    }, delay);
    if (callNow) fn.apply(context, arg);
  };
};

export const throttle = (fn, delay = 500, immediate = true) => {
    let timer: any = null;
    return function (...arg) {
        const context = this;
        if (!timer) {
            timer = setTimeout(() => {
                if (!immediate) fn.apply(context, arg);
                timer = null;
            }, delay);
            if (immediate) fn.apply(context, arg);
        }
    }
};

const DebounceAndThrottle = () => {
  const handleClick = throttle(() => {
    console.log("debounce");
  }, 1000);
  return (
    <div>
        <button onClick={handleClick}>222333</button>
    </div>
  )
};

export default DebounceAndThrottle;