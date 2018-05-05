interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[];
}

//this shows how type operator specifys funcion types, above shows the interface pattern
type getAvailableSizes = () => string[];
interface Pizzas {
    data: Pizza[]
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('Pepperoni', [ 'small', 'medium' ]);
