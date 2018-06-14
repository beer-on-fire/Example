{
    // 检测传入的参数是否是一个有穷数
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('NaN',Number.isNaN(NaN));
    
}

{
    // 判断一个值是否为整数
    console.log('23',Number.isInteger(23));
    console.log('23.3',Number.isInteger(23.3));
    console.log('23.0',Number.isInteger(23.0));
    console.log('string-23.0',Number.isInteger('23.0'));
    
    
}

{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
    // 是否在安全值范围内
    console.log(Number.isSafeInteger(10));
    console.log(Number.isSafeInteger(9007199264740999));
    
    
}

{
    // 取整（去除小数点后）
    console.log('4.1 =>',Math.trunc(4.1));
    
}

{
    // 判断正负 0
    console.log('-5 =>',Math.sign(-5));
    console.log('0 =>',Math.sign(0));
    console.log('5 =>',Math.sign(5));
    console.log('string-5 =>',Math.sign('5'));
    console.log('foo =>',Math.sign('foo'));
    
}

{
    // 开立方根
    console.log('-1 =>',Math.cbrt(-1));
    console.log('8=>',Math.cbrt(8));
    
}