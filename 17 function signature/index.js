// function signature syntext
var display;
var userInfo1;
var userInfo2;
display = function () {
    console.log("Hello, I am Tushar");
};
display();
userInfo1 = function (name) {
    console.log("Hello, I am ".concat(name));
};
userInfo1("Tushar");
userInfo2 = function (name, age) {
    return "Hello, I am ".concat(name, ", ").concat(age, " years old");
};
console.log(userInfo2("Tushar", 24));
