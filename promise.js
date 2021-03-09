Promise.resolve().then(() => {
    console.log('100');
    return Promise.resolve();
})
    .then(() => {
        console.log('200');
        return Promise.resolve();
    })
    .then(() => {
        console.log('300')
    })
    .then(() => {
        console.log('400')
    })
    .then(() => {
        console.log('500')
    });
Promise.resolve()
    .then(() => {
        console.log(1)
    })
    .then(() => {
        console.log(2)
    })
    .then(() => {
        console.log(3)
    })
    .then(() => {
        console.log(4)
    })
    .then(() => {
        console.log(5)
    })
    .then(() => {
        console.log(6)
    })
    .then(() => {
        console.log(7)
    })
    .then(() => {
        console.log(8)
    })
    .then(() => {
        console.log(9)
    })
    .then(() => {
        console.log(10)
    })
    .then(() => {
        console.log(11)
    })
    .then(() => {
        console.log(12)
    })
    .then(() => {
        console.log(13)
    })
Promise.resolve()
    .then(() => {
        console.log(10)
    })
.then(() => {
    console.log(20)
})
.then(() => {
    console.log(30)
})
.then(() => {
    console.log(40)
})
.then(() => {
    console.log(50)
})
.then(() => {
    console.log(60)
})
.then(() => {
    console.log(70)
})
.then(() => {
    console.log(80)
})
