{
    class Breakfast {
        constructor(x,y) {
            this.x = x
            this.y = y
            this.dish = []
        }
        get menu() {
            return this.dish;
        }
        set menu(dish) {
            this.dish.push(dish)
        }
        set fuck(dish) {
            return this.fuck
        }
        eat() {
            console.log(`eat ${this.x}`);
        }
        drink(){
            console.log(`drink ${this.y}`);
        }
        static cook(food) {
            console.log(food);
        }
    }
    
    let lunch = new Breakfast('🍎','🍺')
    lunch.eat()
    lunch.drink()
    
    let dinner = new Breakfast()
    console.log(dinner.menu = '🥩');
    console.log(dinner.menu = '🐟');
    console.log(dinner.fuck = '👩');
    console.log(dinner.menu);
    
    Breakfast.cook('🐂')
}

{
    class Person {
        constructor(name,gender) {
            this.name = name
            this.gender = gender
        }
        intro() {
            return `姓名: ${this.name} 性别:${this.gender}`
        }
    }
    
    class Chef extends Person {
        constructor(name,gender) {
            super(name,gender)
            this.type = 'student'
        }
    }
    
    let people = new Chef('genius','male')
    
    console.log(people.intro());
    console.log(people.type);
    
}