class EventEmitter {
    private handles: object;
    constructor() {
        this.handles = {} // 用于存储事件名和对应的回调函数数组
    }

    // 订阅事件，将回调函数添加到指定事件的回调数组中
    on(eventName, cb) {
        if (!this.handles[eventName]) {
            this.handles[eventName] = [] 
        }
        this.handles[eventName].push(cb) 
    }

    // 触发指定事件，依次调用对应事件的所有回调函数
    emit(eventName) {
        if (this.handles[eventName]) {
            const handles = this.handles[eventName]
            handles.forEach(cb => {
                cb() // 依次调用事件的回调函数
            });
        }
    }

    // once 方法用于仅订阅一次事件，即回调函数只会被执行一次
    once(eventName, cb) {
        // 如果事件已经存在，并且该回调函数已经被订阅过，则直接返回，不再重复订阅
        if (this.handles[eventName] && this.handles[eventName].indexOf(cb) !== -1) {
            return
        }
        // 否则，调用 on 方法订阅事件
        this.on(eventName, cb)
    }

}

const Message = new EventEmitter()

export default Message

