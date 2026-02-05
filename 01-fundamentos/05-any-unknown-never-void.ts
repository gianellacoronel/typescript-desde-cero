// ==================================
// ANY, UNKNOWN, NEVER y VOID
// ==================================

// ==================================
// ANY - El tipo que desactiva TypeScript
// ==================================
let cualquierCosa: any = "hola";
cualquierCosa = 12;
cualquierCosa = true;
cualquierCosa.saludar(); // No da error sin ni siquiera existir

// Dónde sí usar ANY (Igual siempre evitarlo)
// 1. en migraciones de JS a TS
// 2. en librerías de terceros sin tipos

// ==================================
// UNKNOWN - La alternativa segura a any
// ==================================

let valorDesconocido: unknown = "hola";
valorDesconocido = 12;
valorDesconocido = true;
valorDesconocido = { nombre: "test" };

valorDesconocido.saludar();

// type narrowing, para verificar si el tipo es el que se requiere
if (typeof valorDesconocido === "number") {
  const resultadoSeguro = valorDesconocido + 8;
  console.log(resultadoSeguro);
} else if (typeof valorDesconocido === "string") {
  console.log(valorDesconocido.toUpperCase());
}

// Caso de uso: para parsear un JSON donde no saber el valor de retorno
function parseJSON(jsonString: string): unknown {
  return JSON.parse(jsonString);
}

// ==================================
// VOID - Funciones que no retornan nada
// ==================================
// void puede retornar undefined

function saludar(): void {
  console.log("Hola!");
}

function logError(errorMessage: string): void {
  if (errorMessage.length === 0) {
    return; //return undefined, es válido
  }

  console.log("Error: ", errorMessage);
}

// ==================================
// NEVER - El tipo imposible
// ==================================

function bucleInfinito(): never {
  while (true) {
    // ...
  }
}

function throwError(message: string): never {
  throw new Error(message);
}

function revisarValor(x: number | string) {
  if (typeof x === "number") {
    console.log("Es un número: ", x);
  } else if (typeof x === "string") {
    console.log("Es una cadena: ", x);
  } else {
    console.log(x); // NUNCA DEBERIA ENTRAR
    // Aquí, x es de tipo 'never'
    throwError("Tipo no soportado");
  }
}
