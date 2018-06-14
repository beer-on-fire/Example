{
    // 简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    }
    let es6 = {
        o,
        k
    }
    console.log(es5, es6);

}

{
    let es5_method = {
        hello: function () {
            console.log('hello');
        }
    }
    let es6_method = {
        world() {
            console.log('world');
        }
    }
    console.log(es5_method.hello(), es6_method.world());
}

{
    // 属性表达式
    let a = 'b'
    let es5_obj = {
        a: 'c'
    }
    let es6_obj = {
        [a]: 'c'
    }
    console.log(es6_obj);

}

{
    // 新增api
    console.log('字符串：', Object.is('abs', 'abs'));
    console.log('数组：', Object.is([], [])); // 引用类型，存址不同
    console.log('拷贝:', Object.assign({
        a: 'a'
    }, {
        b: 'b'
    }));

    console.log(NaN == NaN);

    console.log(Object.is(NaN, NaN));

    console.log(+0 == -0);
    console.log(+0 === -0);

    console.log(Object.is(+0, -0));




    let k = {
        a: 1,
        b: 2
    }
    for (let [key, value] of Object.entries(k)) {
        console.log([key, value])

    }
}

{
    // 扩展运算符
    let {
        a,
        b,
        ...c
    } = {
        a: 'test',
        b: 'kill',
        c: 'ddd',
        d: 'ccc'
    }
    console.log(c);

}