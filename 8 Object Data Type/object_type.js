// Define a object
// let user1 = Object;
// let user1: { userName: string; userId: number };
// user1 = { userName: "Tushar", userId: 101 };
// console.log(user1);
// Define Array of object
var users;
// users = [
//   { userName: "Tushar", id: 101 },
//   { userName: "Shahin", id: 2 },
// ];
// console.log(users);
users = [];
var user2;
user2 = { userName: "Tushar", userId: 102 };
users.push(user2);
var user3;
user3 = { userName: "Nadia", userId: 103 };
users.push(user3);
// console.log(users);
for (var key in users) {
    //   console.log(key);
    //   console.log(users[key]);
    console.log(users[key]["userName"]);
}
