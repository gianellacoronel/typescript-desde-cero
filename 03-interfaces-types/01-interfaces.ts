// ==================================
// INTERFACES EN TYPESCRIPT
// ==================================

// Las interfaces definen la "forma" de un objeto
// Son contratos que especifican qué propiedades y métodos debe tener

interface Persona {
  readonly name: string;
  readonly age: number;
}

interface Identificable {
  id: `user-${number}`;
}

interface User extends Persona, Identificable {
  email?: string;
  role: "admin" | "user" | "editor";
  saludar: () => string; // ó saludar(): string;
  login(): boolean;
}

interface Admin extends User {
  adminLevel: number;
  accessAllAreas: boolean;
  rootAdmin(): void;
}

const user: User = {
  id: "user-246810",
  name: "bruce",
  age: 7,
  role: "admin",
  saludar: () => "Hola!",
  login() {
    return true;
  },
};

// Funciona igual que los tipos
// Las interfaces funcionan más interesantes con objetos

// Diferencias
// 1. Union type ("admin" | "user" | "editor") SOLO funciona con type

// Recomendación
// Usar INTERFACES para los OBJETOS, y dejar el resto para usarlos con TIPOS

// Las interfaces, si se crean varias con el mismo nombre en el mismo fichero, se FUSIONAN
// Es útil para extender tipos de librerías externas (pero no es recomendable)
interface Hero {
  nombre: string;
}
interface Hero {
  poder: string;
}

const hero: Hero = {
  nombre: "Pantera Negra",
  poder: "",
};

// interfaces para funciones
interface Calculadora {
  (a: number, b: number): number;
}
const calcular: Calculadora = (x, y) => x + y;
// ==================================
// INTERFACES PARA CLASES
// ==================================
interface MediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

interface AudioPlayer {
  volumen: number;
}

class Reproductor implements MediaPlayer, AudioPlayer {
  volumen: number = 50;
  play(): void {
    console.log("Reproduciendo...");
  }
  pause(): void {
    console.log("Pausando");
  }
  stop(): void {
    console.log("Detenido");
  }
}
