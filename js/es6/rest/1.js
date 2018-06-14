let fruits = ['🍎','🍌','🍍'],
    foods = ['🎂',...fruits]

console.log(fruits);
console.log(...fruits);
console.log(foods);

function breakfast(dessert,drink,...foods) {
    console.log(dessert,drink,foods);
}

breakfast('🍎','🍍','🥩','🐏','🐎')