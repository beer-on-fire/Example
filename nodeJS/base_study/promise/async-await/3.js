let num = 0;

function back() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('哈哈哈哈哈哈')
        }, 3000);
    });
}
async function test() {
    let x = await back();
    console.log(x);
}

test();

setInterval(()=>{
    num++;
    console.log(num);
},1000)
