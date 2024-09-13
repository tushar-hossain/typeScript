// Create a User interface

interface User {
  name: string;
  age: number;
  id: number;
}

let Users: User[] = [];
// let Users: { name: string; age: number; id: number }[] = [];

let user: User = {
  name: "tushar",
  age: 23,
  id: 10214,
};
// let user: { name: string; age: number; id: number } = {
//   name: "tushar",
//   age: 23,
//   id: 10214,
// };
Users.push(user);

let user2: User = {
  name: "Nadia",
  age: 24,
  id: 210145,
};
Users.push(user2);

// let user2: { name: string; age: number; id: number } = {
//   name: "Nadia",
//   age: 24,
//   id: 210145,
// };
// Users.push(user2);

// console.log(user2);
console.log(Users);
