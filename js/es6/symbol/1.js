{
    //声明
    let a = Symbol()
    let b = Symbol()
    console.log(a===b);

    // 全局查询是否有key为c的值，有就返回，没就执行Symbol()生成
    let c = Symbol.for('c')
    let d = Symbol.for('c')
    console.log(c===d);
    
}

{
    let a = Symbol.for('abc')
    let obj = {
        [a]: '123',
        'abc':345,
        'c':456
    }
    console.log(obj);
    
    // let-of 取不到symbol作为key值的
    for (let [key,value] of Object.entries(obj)) {
        console.log([key,value]);
    }
    Object.getOwnPropertySymbols(obj).forEach(item=>{
        console.log(item);
        
    })

    Reflect.ownKeys(obj).forEach(item=>{
        console.log('ownKeys:',item);
        
    })
}