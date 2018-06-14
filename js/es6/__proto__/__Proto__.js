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

let sunday = {
    __proto__: breakfast
}
console.log(sunday.getDrink());
