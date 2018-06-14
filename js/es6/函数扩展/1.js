{
    function fruit(food = '🍎',eat= '🥩'){
        console.log(`${food} ${eat}`);
         
    }
    
    fruit()
    fruit('🍌')
}

{
    let x = 'test'
    function test(x,y=x) {
        console.log('作用域：',x,y);
        
    }
    test('kill')
}

{
    let x = 'test'
    function test(c,y=x) {
        console.log('作用域：',c,y);
        
    }
    test('kill')
}

{
    function test(...arg) {
        for(let i of arg) {
            console.log('rest:',i);
        }
    }
    test(1,2,3,'a')
}

{
    console.log(...[4,5,6]);
    
}

{
    let aoorw = x => x*2
    console.log( aoorw(4) );
   
}

{
    //尾调用
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x)
    }
    fx(123)
}