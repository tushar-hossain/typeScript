// build in data type => number, string, boolean, void, undifine, null
var userId;
var firstName;
var lastName;
var isActivated;
userId = 101;
firstName = "Tushar";
lastName = " Hossain";
isActivated = true;
var fullName = firstName.concat(lastName);
console.log("FullName: " + fullName);
console.log(fullName.split("", 5));
console.log(fullName.slice(0, 10));
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toLocaleUpperCase());
// No return this funtion
function display() {
    console.log("Hi i am display");
}
display();
