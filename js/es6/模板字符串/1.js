let a = '🍎',b= '香蕉'

let fruit = kitchen`水果有 \n ${a}和${b}`

function kitchen( str, ...values) {
    // console.log(str);
    // console.log(values);
    let result = ''
    for(let i=0;i<values.length;i++ ) {
        result += str[i]
        result += values[i]
    }
    result += str[str.length-1]
    return result
}

console.log(fruit);
