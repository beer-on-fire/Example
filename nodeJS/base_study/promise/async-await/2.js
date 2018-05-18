function doubleAfter2seconds(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
            console.log(num);
        }, 2000);
    } )
}

async function testResult() {
    let first = await doubleAfter2seconds(30);
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(30);
    console.log(first + second + third);
}

testResult()
console.log('我先执行啦');
