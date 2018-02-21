interface Pizza {
    name: string;
    price: number;
    getName(): string
}
interface Order {
    pizza: Pizza,
    toppings: string[]
}

const pizza:Pizza = {
    name: 'Pepperoni',
    price: 15,
    getName: (): string => {
        return pizza.name;
    }
};


const toppings: string[] = [ 'pepperoni' ];
const order: Order = { pizza, toppings };

function createOrder(pizza: Pizza, toppings: string[]) {
    return { pizza, toppings };
}

console.log(order);
console.log(createOrder(pizza, toppings));

