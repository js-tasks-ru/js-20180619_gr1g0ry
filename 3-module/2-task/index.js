let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = new Date(this.from);
    const last = this.to;

    return {
        next() {
            if (current <= last) {
                current.setDate(current.getDate() + 1);
                let currentDay = current.getDay();
                let currentDate = ('0' + current.getDate()).substr(-2);
                return {
                    value: (currentDay === 0 || currentDay === 6) ? `[${currentDate}]` : currentDate,
                    done: false
                }
            }
            return {done: true};
        }
    }
};
