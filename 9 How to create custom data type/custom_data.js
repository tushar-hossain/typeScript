var user;
user = [];
var user1;
user1 = { userName: "tushar", userId: 101 };
user.push(user1);
var user2;
user2 = { userName: "shahin", userId: 102 };
user.push(user2);
console.log(user);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
