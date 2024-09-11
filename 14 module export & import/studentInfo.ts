export class Student {
  studentId: number;
  constructor(studentId: number) {
    this.studentId = studentId;
  }
  display(): void {
    console.log(`Student ID: ${this.studentId}`);
  }
}
