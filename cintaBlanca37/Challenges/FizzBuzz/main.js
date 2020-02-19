/*
Crea un programa en JavaScript donde recorra del 1-100, si el numero es divisible entre 3 entonces sera "Fizz", si es divisble entre 5 entonces sera "Buzz" pero, si es divisible entre 3 y 5, entonces sera "FizzBuzz"
3: Fizz
5: Buzz
15: Fizzbuzz
*/

for(let i = 0; i < 101; i++) {
    if(i%3 === 0 && i%5 === 0) {
        console.log(i + " FizzBuzz");
    } else if(i%3 === 0) {
        console.log(i + " Fizz");
    } else if(i%5 === 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i + " No es divisible entre 3 o 5!");
    }
}