let num1 = prompt('please enter the first number:');
let num2 = prompt('please enter the second number:');

if(num1 !== num2) {
    if (num1 > num2) {
        console.log('the first number is greater than the second one');
    } else if (num2 > num1){
        console.log('the second number is greater than the first one');
    }
} else {
    console.log("they're both equal");
}