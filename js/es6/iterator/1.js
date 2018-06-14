{
    let arr = ['hello','world']
    let map = arr[Symbol.iterator]()
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
    
}

{
    let obj = {
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end)
            let len = arr.length
            return {
                next() {
                    if(index<len) {
                        return {
                            value: arr[index++],
                            done:false
                        }
                    }
                    else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj) {
        console.log(key);
        
    }
}

{
    function createIterator(items) {
        let i = 0;
        return {
            next: function() {
                let done = (i>=items.length)
                let value = !done? items[i++] : undefined
            
                return {value: value,done: done}
            }
        }
    }
    
    let iterator = createIterator([1,2,3])
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}