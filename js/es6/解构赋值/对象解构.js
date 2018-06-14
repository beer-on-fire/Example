{
    function breakfast() {
        return {a:'🍌',b:'🍍',c:'🎂'}
    }
    
    let {a: a,b: b,c: c} = breakfast()
    
    console.log(a,b,c);
}

{
    let o ={p:43,q:true}
    let {p,q} = o
    console.log(p,q);
    
}

{
    let {a=10,b=5} = {a:3}
    console.log(a,b);
    
}

{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'cdf',
            desc: 'desc'
        }]
    }    
    let {title: esTitle,test:[{title: cnTitle}]} = metaData
    console.log(esTitle,cnTitle);
}