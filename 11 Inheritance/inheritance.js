// Parent class User
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    User.prototype.display = function () {
        console.log("usrName: ".concat(this.userName, ", userId: ").concat(this.userId, " "));
    };
    return User;
}());
// Child class access to parent class (super key-word)
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, userId, stdAge) {
        var _this = _super.call(this, userName, userId) || this;
        _this.userName = userName;
        _this.userId = userId;
        _this.stdAge = stdAge;
        return _this;
    }
    Student.prototype.stdDisplay = function () {
        console.log("userName : ".concat(this.userName, ", user ID : ").concat(this.userId, ", student Age : ").concat(this.stdAge));
    };
    return Student;
}(User));
var std1 = new Student("Tushar", 2146, 23);
std1.stdDisplay();
var std2 = new Student("Nadia", 8031, 25);
std2.stdDisplay();
