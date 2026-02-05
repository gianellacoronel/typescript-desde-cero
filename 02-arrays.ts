// ==================================
// ARRAYS EN TYPESCRIPT
// ==================================

// Tuplas
const frutas: [string, string, string] = ["manzana", "plátano", "sandía"];

// Sintaxis 1
const numeros: number[] = [1, 2, 3, 4, 5];
numeros.push(6);

// Sintaxis 2
const numerosAlt: Array<number> = [10, 20, 30];
numerosAlt.push(40);

// Arrays de tipos mixtos
const mixto: (string | number)[] = [1, "dos", 3, "cuatro"];
