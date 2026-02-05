export type Company = {
  name: string;
  address: string;
  phone?: string;
};

type UserId = {
  readonly id: string | number;
};

type UserWithBirthdate = {
  birthdate: Date;
};

export type User = {
  readonly name: string; // Para que nadie pueda asignar otro valor a esta propiedad, se pone readonly
  age: number;
  email?: string; // propiedad opcional
  company?: Company; // Objetos anidados
  role: "admin" | "user" | "editor"; // Literal type
  // Para indicar cosas en específico
};

export type UserEntity = User & UserId & UserWithBirthdate; // Intersection Type

export type Configuration = {
  readonly apiKey: string;
  readonly theme: "dark" | "light";
};

// Literal Types
type Answer = "si" | "no" | true | false;
type Direction = "up" | "down" | "left" | "right";
