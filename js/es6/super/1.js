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
    __proto__: breakfast,
    getDrink() {
        return super.getDrink() + '🥛'
    }
}


console.log(sunday.getDrink());
