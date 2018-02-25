interface Pizza {
    name: string;
    price: number;
    getName(): string;
}
let pizza: Pizza;

pizza = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName: () => pizza.name
}

console.log(pizza.getName());
