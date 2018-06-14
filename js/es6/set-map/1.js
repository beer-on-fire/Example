{
    let dish = new Set('🍦🐎🐂🐖🐟')
    dish.add('🐻')
    dish.add('🐶')
    dish.add('🐱')
    dish.add('🐱')

    console.log(dish);
    console.log(dish.size);
    console.log(dish.has('🐱'));

    dish.delete('🐱')
    console.log(dish);

    dish.clear()
    console.log(dish);

    let tmp = new Set([1,2,3])
    console.log([...tmp]);
}

{
    let arr = ['add','delete','clear']
    let x= new Set(arr)

    for(let [key,value] of x.entries()) {
        console.log([key,value]);
    }
    for(let value of x) {
        console.log(value);
    }

    
}
