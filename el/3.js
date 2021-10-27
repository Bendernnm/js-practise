// process.nextTick(() => console.log('tick'));
// Promise.resolve().then(() => console.log('promise'));

// Promise.resolve().then(() => console.log('promise'));
// process.nextTick(() => {
//   console.log('tick1');
//
//   process.nextTick(() => console.log('tick2'));
//   Promise.resolve().then(() => console.log('promise2'));
// });

function returnPromise() {
    return Promise.resolve().then(() => console.log('promise3'));
}

process.nextTick(() => console.log('tick'));
Promise.resolve().then(() => {
    console.log('promise');

    process.nextTick(() => console.log('tick2'));
    Promise.resolve().then(() => console.log('promise2'));

    setTimeout(() => returnPromise() // timer1
        .then(() => returnPromise())
        .then(() => returnPromise().then(() => setTimeout(() => console.log('timer2'), 0)))
        .then(() => returnPromise().then(() => process.nextTick(() => console.log('tick3')))), 0);

    setImmediate(() => console.log('immediate1'));
});
