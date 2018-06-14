{
    let obj = {
        time:'2017-03-11',
        name:' test',
        _r:123
    }
    let monitor = new Proxy(obj,{
        // 拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017','2018')
        }
    })
    //get
    console.log('get:',monitor.time);
    monitor.time = '2019'    
}

{
    let obj = {
        time:'2017-03-11',
        name:' test',
        _r:123
    }
    let monitor = new Proxy(obj,{
        //拦截对象属性的设置
        set(target,key,value) {
            if(key === 'name') {
                return target[key] = value
            } else{
                return target[key]
            }
        }
    })
     //set
     console.log('setNotAllow:',monitor.time);
     monitor.name = 'leo'
     console.log('setAllow:',monitor.name);
}

{
    let obj = {
        time:'2017-03-11',
        name:' test',
        _r:123
    }
    let monitor = new Proxy(obj,{
        // 拦截key in object操作
        has(target,key) {
            if(key === 'name') {
                return target[key]
            } else {
                return false
            }
        }
    })
     // has
     console.log('has:','name' in monitor);
     console.log('has:','time' in monitor);
}

{
    let obj = {
        time:'2017-03-11',
        name:' test',
        _r:123
    }
    let monitor = new Proxy(obj,{
        // 拦截delete
        deleteProperty(target,key) {
            if(key.startsWith('_')) {
                delete target[key]
                return true
            } else {
                return target[key]
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item=>item!='time')
        }
    })
     // delete
     delete monitor._r
     console.log('delete:',monitor);

     delete monitor.time
     console.log('delete:',monitor);
}

{
    let obj = {
        time:'2017-03-11',
        name:' test',
        _r:123
    }
    let monitor = new Proxy(obj,{
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item=>item!='time')
        }
    })
    console.log('ownKeys',Object.keys(monitor));
}

{
    let obj = {
        time:'2017-03-11',
        name:' test',
        _r:123
    }
    console.log('reflect:',Reflect.get(obj,'time'));
    
    Reflect.set(obj,'name','momo')
    console.log('reflect:',obj.name);
    
}

{
    function validate(target,validate) {
        return new Proxy(target,{
            _validate: validate,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)) {
                    let va = this._validate[key]
                    if(!!va(value)) {
                        return Reflect.set(target,key,value,proxy)
                    } else {
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else {
                    throw Error(`${key}不存在`)
                }
            }
        })
    }
    const personValidators = {
        name(val) {
            return typeof val==='string'
        },
        age(val) {
            return typeof val ==='number' && val>18
        }
    }
    class Person{
        constructor(name,age) {
            this.name = name
            this.age = age
            return validate(this,personValidators)
        }
    }
    const person = new Person('leo',30)
    console.info(person)
    // person.number = 18
    
    person.age = 18
    console.info(person)

}