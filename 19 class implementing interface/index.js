var User = /** @class */ (function () {
    function User(userName, age) {
        var _this = this;
        this.userName = userName;
        this.age = age;
        this.userFormat = function () {
            return "name: ".concat(_this.userName, ", age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Mr. potato", 22);
// console.log(user);
console.log(user.userFormat());
