// function signature syntext

let display: () => void;
let userInfo1: (name: string) => void;
let userInfo2: (name: string, age: number) => string;

display = () => {
  console.log("Hello, I am Tushar");
};
display();

userInfo1 = (name: string) => {
  console.log(`Hello, I am ${name}`);
};
userInfo1("Tushar");

userInfo2 = (name: string, age: number) => {
  return `Hello, I am ${name}, ${age} years old`;
};
console.log(userInfo2("Tushar", 24));
