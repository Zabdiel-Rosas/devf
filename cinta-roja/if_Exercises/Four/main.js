let numOne = prompt('enter the first number please');
let numTwo = prompt('enter the second number please');
let numThree = prompt('enter the third number please');

if (numOne === numTwo) {
    if (numOne === numThree) {
        console.log('The three numbers are all equal');
    } else {
        console.log('The first two numbers are equal but not the third');
    }
} else if (numTwo === numThree) {
    console.log('the last two numbers are equal but the first is different');
} else if (numOne === numThree) {
    console.log('the first and the last numbers are equal but not the second one');
} else {
    console.log('none of the numbers entered are equals');
}