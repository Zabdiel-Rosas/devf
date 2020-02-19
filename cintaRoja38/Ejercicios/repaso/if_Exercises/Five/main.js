let numOne = prompt('enter the first number please');
let numTwo = prompt('enter the second number please');
let numThree = prompt('enter the third number please');

if (numOne > numTwo && numOne > numThree) {
    console.log('The first number is the largest');
    console.log(numOne);
} else if(numTwo > numOne && numTwo > numThree) {
    console.log('the second number is the largest');
} else if (numThree > numOne && numThree > numTwo) {
    console.log('the third number is the largest');
}