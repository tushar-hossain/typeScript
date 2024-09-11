"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var studentInfo_1 = require("./studentInfo");
// let sdt1 = new Student(101);
// sdt1.display();
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(userName, userAge, studentId) {
        var _this = _super.call(this, studentId) || this;
        _this.userName = userName;
        _this.userAge = userAge;
        return _this;
    }
    User.prototype.display = function () {
        console.log("Name : ".concat(this.userName, ", Age : ").concat(this.userAge, " Student ID : ").concat(this.studentId));
    };
    return User;
}(studentInfo_1.Student));
var user1 = new User("tushar", 23, 2145623);
user1.display();
