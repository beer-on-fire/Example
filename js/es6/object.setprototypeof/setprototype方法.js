let breakfast = {
    getDrink() {
        return '🍺'
    }
}

let dinner = {
    getDrink() {
        return '📕'
    }
}

let sunday = Object.create(breakfast)

console.log(sunday.getDrink());

console.log(Object.getPrototypeOf(sunday) === breakfast);

Object.setPrototypeOf(sunday,dinner)

console.log(sunday.getDrink());
console.log(Object.getPrototypeOf(sunday) === dinner);