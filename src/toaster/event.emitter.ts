class EventEmitter {
    events: { [key: string]: Function[] } = {};

    on(event: string, cb: Function): void {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(cb);
    }

    emit(event: string, ...args) {
        if (!this.events[event]) {
            return;
        }

        this.events[event].forEach(listener => listener(...args));
    }
}

export default EventEmitter;
