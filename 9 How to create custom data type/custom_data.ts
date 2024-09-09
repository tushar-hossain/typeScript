type Users = { userName: string; userId: number };
let user: Users[];
user = [];

let user1: Users;
user1 = { userName: "tushar", userId: 101 };
user.push(user1);

let user2: Users;
user2 = { userName: "shahin", userId: 102 };
user.push(user2);

console.log(user);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}

requestHandler("GET");
