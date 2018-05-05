type Size = 'small' | 'medium' | 'large';
type Callback = (Size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: Callback = (x) => {
    pizzaSize = x;
};

selectSize('small');

