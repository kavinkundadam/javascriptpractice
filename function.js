const headingEl = document.querySelector('.countdown');

function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}

wait(1000)
    .then(() => {
        headingEl.innerHTML = "countdown starts";
        return wait(1000);
    })
    .then(() => {
        headingEl.innerHTML = 3;
        return wait(1000);
    })
    .then(() => {
        headingEl.innerHTML = 2;
        return wait(1000);
    })
    .then(() => {
        headingEl.innerHTML = 1;
        return wait(1000);
    })
    .then(() => {
        headingEl.innerHTML = "End"
    })

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Got a value'), 1000);
})

// Promise.all
const p2 = Promise.resolve("Promise 2");

const p3 = Promise.resolve('Promise 3 value');

const p4 = Promise.reject('Rejected')

Promise.all([p1, p2, p3, p4]).then((responses) => {
    console.log('reponses: ',responses);
}).catch((error) => {
    console.error("Error:", error);
})

// Promise.allSettled
/*
const promise1 = Promise.resolve('Kavin is working');
const promise2 = new Promise((resolve, reject) => {
    // setTimeout(reject, 100, 'API - Error') // Both are same
    setTimeout(reject('API - Error'), 1000);
})

const promises = [promise1, promise2];

Promise.allSettled((promises)
    .then((response) => {
        console.log("Responses:", response);
    })
    .catch((error) => {
        console.log("Error:", error);  
    })
    )
*/

// Promise.race()
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('one'), 500);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Two'), 400);
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Something went wrong'), 2000);
})

Promise.race([promise3, promise4, promise5])
    .then((response) => {
        console.log("Response:", response)
    })
    .catch((error) => {
        console.log('Error:', error)
    })

// Promise.any()

const promiseAny1 = Promise.reject(0);

const promiseAny2 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'quick');
})

const promiseAny3 = new Promise((resolve) => {
    setTimeout(resolve, 100, 'slow');
})

const promiseAny4 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Something went wrong'), 50);
})

Promise.any([promiseAny1, promiseAny2, promiseAny3, promiseAny4]) 
    .then((response) => {
        console.log("Response:", response);
    })
    .catch((error) => {
        console.log("Error:", error);
    })


// Functions are first-class citizens

function cmToIn(length) {
  return length / 2.54;
}

function inToCm(length) {
  return length * 2.54;
}

function convert(fn, length) {
  return fn(length);
}

let inches = convert(cmToIn, 10);
console.log(inches);

let cm = convert(inToCm, 10);
console.log(cm);