const pizza = {
  name: "Pepperoni",
  toppings: ["pepperoni"]
};

let order = ({
  name: pizzaName,
  toppings: pizzaToppings
}: {
  name: string;
  toppings: string[];
}) => {
  return { pizzaName, pizzaToppings };
};

const myOrder = order(pizza);
console.log(myOrder);

const { pizzaName } = order(pizza);
console.log(pizzaName);

const toppings = [ 'pepperoni', 'bacon', 'chilli' ];

const [ first, second, third ] = toppings;

console.log(first);
console.log(second);
console.log(third);

function logToppings([ first, second, third ]: any) {
    console.log(first, second, third);
}

logToppings(toppings);
