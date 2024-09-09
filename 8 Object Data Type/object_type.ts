// Define a object

// let user1 = Object;

// let user1: { userName: string; userId: number };
// user1 = { userName: "Tushar", userId: 101 };
// console.log(user1);

// Define Array of object

let users: {}[];

// users = [
//   { userName: "Tushar", id: 101 },
//   { userName: "Shahin", id: 2 },
// ];
// console.log(users);

users = [];

let user2: { userName: string; userId: number };
user2 = { userName: "Tushar", userId: 102 };
users.push(user2);

let user3: { userName: string; userId: number };
user3 = { userName: "Nadia", userId: 103 };
users.push(user3);

// console.log(users);

for (const key in users) {
  //   console.log(key);
  //   console.log(users[key]);
  console.log(users[key]["userName"]);
}
