// ==================================
// TYPE NARROWING (Estrechamiento de tipos)
// ==================================

// Type Narrowing es la técnica de reducir un tipo más amplio
// a uno más específico mediante comprobaciones
function procesar(valor: number | string) {
  // <--- el "valor" es de tipo "number" | "string"
  console.log(valor);
  if (typeof valor === "number") {
    // <--- el "valor" es de tipo "number"
    console.log("El valor es un número: ", valor.toFixed(2));
  } else {
    // <--- el "valor" es de tipo "string"
    console.log("El valor es una cadena: ", valor.toUpperCase());
  }
}

function imprimirMensaje(mensaje: string | null | undefined) {
  // <--- el "mensaje" es de tipo "string" | null | undefined
  if (mensaje) {
    // Aquí ya se descarta que sea null o undefined
    console.log(mensaje.toUpperCase());
  }
}

// OPERATOR NARROWING
type Pez = {
  nadar: () => void;
  nombre: string;
};

type Pajaro = {
  volar: () => void;
  nombre: string;
};

type Perro = {
  ladrar: () => void;
  nombre: string;
};

type Animal = Pez | Pajaro | Perro;

function moverAnimal(animal: Animal) {
  if ("nadar" in animal) {
    console.log("El pez está nadando");
    animal.nadar();
  } else if ("volar" in animal) {
    console.log("El pájaro está volando");
    animal.volar();
  } else {
    console.log("El perro está ladrando");
    animal.ladrar();
  }
}

// instanceof Narrowing
function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toUTCString();
  }
  return new Date(value).toUTCString();
}
