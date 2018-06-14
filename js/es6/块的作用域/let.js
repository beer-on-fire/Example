if(true) {
    let fruit = '🍎'
    console.log(fruit);
}
// console.log(fruit);

function test() {
    for(let i=0;i<3;i++) {
        console.log(i);
    }
    // console.log(i);
}

test()


function last() {
    // b指向内存的指针是不变的，但指针中的对象是可以变的
    const b = {
        name: 'leo'
    }
    b.gender = 'male'
    console.log(b);
    
}

last()