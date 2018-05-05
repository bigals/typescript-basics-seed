type Pizza = { name: string, toppings: number };

const pizza: Pizza = { name: 'Blazing Inerno', toppings: 5 }

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string): Pizza {
    return (<Pizza<Pizza>JSON.parse(obj)).name;
}

getNameFromJSON(serialized);
