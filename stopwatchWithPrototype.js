function StopWatch() {

    let duration = 0;
    let running = false;
    let startTime = 0;
    let stopTime = 0;

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {
            duration = value;
        }
    })
    Object.defineProperty(this, 'running', {
        get: function() {
            return running;
        },
        set: function(value) {
            running = value;
        }
    })
    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        },
        set: function(value) {
            startTime = value;
        }
    })
    Object.defineProperty(this, 'stopTime', {
        get: function() {
            return stopTime;
        },
        set: function(value) {
            stopTime = value;
        }
    });
}

StopWatch.prototype.start = function () {
    if (!this.running) {
        this.running = true;
        this.startTime = Date.now();
    } else {
        throw new Error('Already running...');
    }
}

StopWatch.prototype.calculateDuration = function() {
    return this.stopTime - this.startTime;
}

StopWatch.prototype.stop = function () {
    if (this.running) {
        this.stopTime = Date.now();
        return this.calculateDuration();
        this.running = false;
    } else {
        throw new Error('Already Stop.');
    }
}
const sw = new StopWatch();
sw.start();
console.log('Working');
console.log(sw.stop());