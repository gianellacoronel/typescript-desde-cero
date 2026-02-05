// ==================================
// TIPOS PRIMITIVOS EN TYPESCRIPT
// ==================================

// 1. strings
const nombre: string = "bruce";
const saludo = `Hola, ${nombre}`; //Tipo inferido como string
const vacio: string = "";

// 2. numeros
const color = 0x09f;
let infinito = Infinity;

// 3. booleanos
let isActive: boolean = true;
isActive = false;

// 4. nulos e indefinidos
let nulo: null = null;
let indefinido: undefined = undefined;

// Union type ( | )
let age: number | null = null;
age = 30;
age = null;

const numeroGrande: bigint = 90064524234234n;

const id: symbol = Symbol("id");

// Diferencia en la inferencia de datos para adivinar el tipo
// para let y const
const ciudad = "Madrid"; // tipo inferido como "Madrid"

let pais = "España";
pais = "Mexico"; // válido
