let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

console.log(`Pizza size before selection: ${ pizzaSize }`);

selectSize('large');

console.log(`Pizza size after selection: ${ pizzaSize }`);


//Example 2
let pizzaSize2: number = 1;

function selectSize2(size: 1 | 2 | 3): void {
    pizzaSize2 = size;
}

console.log(`Pizza size before selection: ${ pizzaSize2 }`);

selectSize2(2);

console.log(`Pizza size after selection: ${ pizzaSize2 }`);
