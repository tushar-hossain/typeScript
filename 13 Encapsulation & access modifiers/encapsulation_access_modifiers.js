// Encapsulation and access modifier
// access modifier => public, private, protected, readonly
// public => public class every class useable
// private =>  private class only accessible within User class
// protected => userName is protected and only accessible within class 'User' and its subclasses.
// readonly => userAge is a read-only property.
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
    //   private userName: string;
    //   private userAge: number;
    //   protected userName: string;
    //   protected userAge: number;
    //   readonly userName: string;
    //   readonly userAge: number;
    function User(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", userId: ").concat(this.userAge, " "));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(userName, userAge, studentId) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.stdDisplay = function () {
        console.log("userName: ".concat(this.userName, ", userId: ").concat(this.userAge, ", studentId: ").concat(this.studentId, " "));
    };
    return Student;
}(User));
var user1 = new User("tushar", 23);
user1.display();
// user1.userName = 'nadia';
// user1.userAge = 25;
var std1 = new Student("Shahin", 22, 20917523);
std1.stdDisplay();
