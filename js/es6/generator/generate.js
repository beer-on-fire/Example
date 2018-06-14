{
    function *createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }
    let iterator = createIterator();
    console.log(iterator.next().value); // 1
    console.log(iterator.next().value); // 2
    console.log(iterator.next().value); // 3
    
    function* createIteratorG(items) {
        for(let item of items) {
            yield item        
        }
    }
    let iteratorG = createIteratorG([4,5,6])
    console.log(iteratorG.next());
    console.log(iteratorG.next());
    console.log(iteratorG.next());
    console.log(iteratorG.next());
    console.log(iteratorG.next());
    
}

{
    function * tell(){
        yield 'a'
        yield 'b'
        return 'c'
    }
    
    let k = tell()
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    
}

{
    let obj = {}
    obj[Symbol.iterator] = function*() {
        yield 1
        yield 2
        yield 3
    }
    for(let value of obj){
        console.log('value:', value);
        
    }
}

{
    let state = function*() {
        while(1) {
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    
    
}

// {
//     let draw = function(count) {
//         // 具体抽奖逻辑
//         console.info(`剩余${count}次`);
        
//     }

//     let residue = function* (count) {
//         while(count>0){
//             count--
//             yield draw(count)
//         }
//     }
//     let star = residue(5)
//     let btn = document.createElement('button')
//     btn.id = 'start'
//     btn.textContent = '抽奖'
//     document.getElementById('start').addEventListener('click',function() {
//         star.next()
//     },false)
// }

{
    // 轮询
    let ajax = function* () {
        yield new Promise(function(resolve,reject) {
            setTimeout(() => {
                resolve({code:1})
            }, 200);
        })
    }
    let pull = function() {
        let geneator = ajax();
        let step = geneator.next()
        step.value.then(function(d) {
            // 不是新的数据
            if(d.code != 0 ) {
                setTimeout(function() {
                    console.log('wait');
                    pull()
                },1000)
            } else {
                console.log(d);
            }
        })
    }
    pull()
}