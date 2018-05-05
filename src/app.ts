class Pizza {
    constructor (readonly name: string) {}
    public toppings: string[] = [];

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('Pepperoni');


console.log(pizza);
