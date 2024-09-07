// build in data type => number, string, boolean, void, undifine, null

let userId: number;
let firstName: string;
let lastName: string;
let isActivated: true;

userId = 101;
firstName = "Tushar";
lastName = " Hossain";
isActivated = true;

let fullName = firstName.concat(lastName);

console.log("FullName: " + fullName);
console.log(fullName.split("", 5));
console.log(fullName.slice(0, 10));
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toLocaleUpperCase());

// No return this funtion
function display(): void {
  console.log("Hi i am display");
}

display();
