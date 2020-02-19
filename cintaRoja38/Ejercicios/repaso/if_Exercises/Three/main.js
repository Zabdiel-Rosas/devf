let currentYear = prompt('please enter the current year:');
let otherYear = prompt('please enter other year:');

if (currentYear > otherYear) {
    let substraction = currentYear - otherYear;
    console.log(substraction + ' years has passed since ' + otherYear + ' to this year');

} else if (currentYear < otherYear) {
    let difference = otherYear - currentYear;
    console.log(difference + ' years are left to get to ' + otherYear);
}