
// i am going a create stopwatch program

function StopWatch() {
    // private properties members
    let duration = 0; // im using let because i need to reassign values
    let start = false;
    let startTime = 0;
    let stopTime = 0;
    let stop = false;


    let setDuration = function(starttime, stoptime) {
        duration = stoptime - starttime;
    }

    this.start = function () {
        if (!start) {
            start = true;
            startTime = Date.now();
        } else {
            throw new Error('Already Started...!');
        }
    }

    this.stop = function() {
        if (!stop) {
            stop = true;
            start = false;
            stopTime = Date.now();
            setDuration(startTime, stopTime);
        } else {
            throw new Error('Stoped Already....!');
        }
    }

    this.reset = function () {
        this.duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

let withPromiseTesting = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolveed');
        }, 4000);
    });
}

let asyncFunction = async () => {
    const sw = new StopWatch();
    sw.start();
    await withPromiseTesting();
    sw.stop();
    console.log(sw.duration);
}
asyncFunction(); 