abstract class Sizes {
    constructor (public sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
}

class Pizza extends Sizes{
    constructor (readonly name: string) {
        super([ 'small', 'medium' ]);
    }
    public toppings: string[] = [];

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('Pepperoni');

console.log(pizza);
