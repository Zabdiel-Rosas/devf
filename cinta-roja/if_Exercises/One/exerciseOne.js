let num1 = prompt('Ingresa el primer número entero:');
let num2 = prompt('Ingresa el segundo número entero:');

let operacion = num1 / num2;



if(operacion % 1 === 0) {
    console.log('la division es exacta');
    console.log(operacion);

} else if(operacion%1 !== 0) {
    console.log('el resultado de la division no es exacta')
    console.log(operacion)
}
