{
    let s ='哈哈'
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('1',s.charCodeAt(1));
    
}

{
    let a = '🍎',b= '🍌'
    let fruit = `水果有 \n ${a}和${b}`

    console.log(fruit.startsWith('水果'));
    console.log(fruit.endsWith('水果'));
    console.log(fruit.includes('🍍'));

}

{
    let str = '🍎'
    console.log((str.repeat(10)));
    
}

{
    // 补白，可用来补零
   console.log('1'.padStart(2,'0'));
   console.log('1'.padEnd(2,'x'));

   let t = new Date(Date.now())
   let y = (new Date().getFullYear()).toString()
   let m =( new Date().getMonth()+1).toString()
   let d = (new Date().getDate()).toString()
   
   let x = `${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`
   console.log(x);

}

{
    // 标签模板
    let a = '🍎',b= '🍌'
    fruit`水果有 \n ${a}和${b} 啦啦啦`
    function fruit(s,v1,v2) {
        console.log(s,v1,v2);
        return s+v1+v2
    }

}

{
    // 对斜杠转义，使 / 不生效
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}