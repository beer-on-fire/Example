{
    let food = new Map()
    let fruit = {},
        cook = function () {},
        dessert = '🥩'

    food.set(fruit, '🍋')
    food.set(cook, '🔪')
    food.set(dessert, '🎂')

    console.log(food);
    console.log(food.size);

    console.log(food.get(fruit));
    food.delete(dessert)
    console.log(food.has(dessert));

    food.clear()
}

{
    let maps = new Map(['a',123],['b',456])
    console.log('map arg',maps);
    
}