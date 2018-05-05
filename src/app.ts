class Sizes {
    constructor (public sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
}

class Pizza extends Sizes {
    constructor (readonly name: string, sizes: string[]) {
        super(sizes);
    }
    public toppings: string[] = [];

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('Pepperoni');

console.log(pizza);
console.log(pizza.availableSizes);
