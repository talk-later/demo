export const debounce = (fn, delay, immediate = false) => {
    let timer = null;
    return function (...arg) {
        const context = this;
        const later = () => {
            timer = null;
            if (!immediate) fn.apply(context, arg);
        }
        const callNow = immediate && !timer;
        if (timer) clearTimeout(timer);
        timer = setTimeout(later, delay);
        if (callNow) fn.apply(context, arg);
    }
}

export const throttle = (fn, delay = 500) => {
    let timer = null;
    return function (...arg) {
        const context = this;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, arg);
                timer = null;
            }, delay);
        }
    }
}