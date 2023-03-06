//PROYECTO CON NOTA
/* 
1) Crear un programa donde el usuario ingrese en un prompt la temperatura
en grados Celcius y el programa muestre en una alert la temperatura en grados Fahrenheit.
 */

/* 
let tempC = parseFloat(prompt("Conversor de temperatura °C - °F \nIngrese la temperatura en grados centigrados"));
let temF = (tempC * (9 / 5)) + 32;
console.log(tempC + "°C son: " + temF + " °F");
 */

/*
2) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5

*
**
***
****
*****
****
***
**
*
 */

/* 
let num1 = parseInt(prompt("Ingrese un número 'x' para dibujar un triangulo de asteriscos de 'x' filas"));
let acum1 = "";

for (let i = 1; i <= num1; i++) {
    acum1 += "*";
    console.log(acum1);
}
 */

/* 
let num2 = parseInt(prompt("Ingrese un número 'x' para dibujar un triangulo de asteriscos de 'x' filas invertido"));
let acum2 = "";

for (j = 0; j < num2; j++) {
    acum2 += "*";
    console.log(acum2);
} */

/*

let ast = acum2;

for (let i2 = num2; i2 >= 0; i2--) {
    ast -= "*";
    console.log(ast);
} */



/*
3) Según un numero ingresado por el usuario, calcular su factorial

Ej:
Factorial 5 = 5 * 4 * 3 * 2 * 1 = 120
factorial de 5 = 120

factorial de 10 = 10*9*8*7*6*5*4*3*2*1 = 3628800
 */

/* 
let n = parseInt(prompt("Ingrese un número para conocer su factorial"));
let sum = 1;

for (let i3 = 1; i3 <= n; i3++) {
    sum = sum * i3;
    //Así mostraía cada vuelta
    //console.log(sum);
}
console.log("Su factorial es: " + sum);
 */

/*
4) ATM (cajero automático)

Crear un programa que tenga un dinero inicial.
El programa también deberá contar con un menú con las siguientes opciones:
- EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
- DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
- CONSULTAR SALDO: debe mostrar el saldo actual
- VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
- SALIR: debe terminar la ejecución del programa

El programa debe mostrar el menú de opciones, y permitir ingresar una opción.
Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú.
Si se elige SALIR, debe terminar el programa.
Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada,
volver al menú de opciones.
Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder
consultarse luego, por ejemplo:

ULTIMOS MOVIMIENTOS
- Extraido: $50
- Depositado: $550
- Extraido: $1000
- Consultado saldo: $3400
- Depositado: $100
- otra operacion
- otra operacion
 */
/*
5) Fibonacci

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34
 */
/* 
let a = 0, b = 1, n = parseInt(prompt("Ingresa un número para conocer las posiciones Finonacci hasta dicho número"));
let c = n;

for (let i = 0; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
}
 */

/* 
let a = 0, b = 1, n = parseInt(prompt("Ingresa un número para conocer las posiciones Finonacci hasta dicho número"));
let c = 0;
    for (let i = 1; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
 */
//Aclaración: colocar nombre y apellido en el titulo del documento HTML!!!!
