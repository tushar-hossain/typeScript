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
    function User(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, userAge, studentID) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.studentID = studentID;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", userAge: ").concat(this.userAge, ", studentID: ").concat(this.studentID));
    };
    return Student;
}(User));
var std1 = new Student("Tushar", 2146, 25);
std1.display();
var std2 = new Student("Shahin", 2097, 23);
std2.display();
