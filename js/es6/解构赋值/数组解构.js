{
    function breakfast() {
        return ['🍌','🍍','🎂']
    }
    
    let [a,b,c] = breakfast()
    
    console.log(a,b,c);
}

{
    let a,b,c,rest
    [a,b,c=3]=[1,2]
    console.log(a,b,c);
    
}

{
    let a=1,b=2;
    [a,b] = [b,a]
    console.log(a,b);
}

{
    function f() {
        return [1,2]
    }
    let a,b;
    [a,b] = f()
    console.log(a,b);
    
}

{
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,,,b,c] = f()
    console.log(a,b,c);
    
}

{
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b] = f()
    console.log(a,b);
    
}

{
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c;
    [a,...b] = f()
    console.log(a,b);
    
}