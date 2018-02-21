function sumAll(message: any, ...arr: any[]) {
    console.log(arguments);
    console.log(
        '---------------------------'
    );
    console.log(message);
    return arr.reduce((prev: any, next:any ) => prev + next );
}

const sum = sumAll('HELLO',1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
console.log(sum);
