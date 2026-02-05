// ==================================
// OBJETOS EN TYPESCRIPT
// ==================================

import { User, UserEntity } from "./00.types";

const user: User = {
  name: "Bruce",
  age: 7,
  email: "bruce.c7@gmail.com",
  role: "admin",
}; // as const, también se le puede agregar para que sean inmutable sus propiedades

const otroUser: User = {
  name: "Zeta",
  age: 6,
  role: "user",
};

const entity: UserEntity = {
  id: 12345,
  name: "BeKer",
  age: 30,
  role: "editor",
  email: "bk34@gmail.com",
  birthdate: new Date("1993-05-07"),
};

//Dynamic object
type Dictionary = {
  [key: string]: string; // Para manejar varios valores que pueden ir en aumento
};

const dictionary: Dictionary = {
  apple: "A fruit that is usually red, green, or yellow.",
  banana: "A long yellow fruit.",
  cherry: "A small red fruit.",
};
