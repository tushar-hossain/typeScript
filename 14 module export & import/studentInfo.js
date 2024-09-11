"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(studentId) {
        this.studentId = studentId;
    }
    Student.prototype.display = function () {
        console.log("Student ID: ".concat(this.studentId));
    };
    return Student;
}());
exports.Student = Student;
