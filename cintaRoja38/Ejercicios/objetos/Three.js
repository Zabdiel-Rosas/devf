class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.Nombre = nombre;
        this.Edad = edad;
        this.Sexo = sexo;
        this.Peso = peso;
        this.Altura = altura;
        this.Rfc = nombre + edad + sexo;
    }

    calcularIMC() {
        let alturaTwo = this.Altura * 2;
        let imc = this.Peso / alturaTwo;
        return imc;
    }

    esMayorDeEdad() {
        if(this.Edad >= 18) {
            return 'Mayor de Edad';
        }
        return 'No es Mayor de Edad';
    }
}

let Zabdiel = new Persona('Zabdiel', '25', 'Masculino', 74, 1.72);
// console.log(Zabdiel);

class Cuenta {
    constructor(titular, cantidad, estado) {
        this.Titular = titular;
        this.Cantidad = cantidad;
        this.Estado = estado;
    }

    //Metodos

    ingresar(nuevaCantidad) {
        let sum = this.Cantidad + nuevaCantidad;

        if (sum > 900) {
            return 'No se puede depositar esta cantidad porque excede el monto que puede tener en su cuenta de ahorros';
        } else if (sum <= 900) {
            this.Cantidad = sum;
            return 'se ha ingresado correctamente la cantidad y ahora su Ahorro Total es de: ' + this.Cantidad;
        }
    }

    retirar(cantidadARetirar) {
        let subs = this.Cantidad - cantidadARetirar;

        if(this.Cantidad < 10 || subs < 10) {
            return 'No se puede retirar la cantidad solicitada porque no puede tener menos de 10 pesos en su cuenta';
        } 

        this.Cantidad = subs;
        return 'Saldo restante: ' + this.Cantidad;
    }
}

let nuevaCuenta = new Cuenta('Jony', 100, 'Puebla');
console.log(nuevaCuenta.retirar(30));