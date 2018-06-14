{
    let arr = Array.of(3,4,7,8,1)
    console.log('arr =',arr);

    let empty = Array.of()
    console.log('empty = ',empty);
    
}

{
    //Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例
    let from = Array.from('foo'); 
    console.log('from = ',from);

    console.log(Array.from([1,2,3],function(item) {return item*2}));
    
}

{
    console.log('fill-7',[1,'a',undefined].fill(7));
    
    // 1,3为起始位置
    console.log('fill,pos',['a','b','c','d','e'].fill(7,1,3));
    
}

{
    for(let index of [1,2,3].keys()) {
        console.log('keys:',index);
        
    }
    // 有兼容问题
    // for(let value of [1,2,3].values()) {
    //     console.log('value:',value);
        
    // }
    for(let [index,value] of [1,2,3].entries()) {
        console.log('entries:',[index,value]);
        
    }
    
}

{
    // 0-起始位置 3-读取位置 4-截至位置（不包含）
    console.log([1,2,3,4,5].copyWithin(0,3,5));
    console.log([1,2,3,4,5].copyWithin(0,3,4));
    
}

{
    // 只找第一个符合的
    console.log([1,23,4,5,6].find(item=>{
        return item>3
    }));

    console.log([1,23,4,5,6].findIndex(item=>{
        return item>3
    }));
}

{
    console.log('number',[1,2,3,NaN].includes(1));
    console.log('number',[1,2,3,NaN].includes(5));
    console.log('number',[1,2,3,NaN].includes(NaN));
    
}