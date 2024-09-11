import { Student } from "./studentInfo";

// let sdt1 = new Student(101);
// sdt1.display();

class User extends Student {
  userName: string;
  userAge: number;

  constructor(userName: string, userAge: number, studentId: number) {
    super(studentId);
    this.userName = userName;
    this.userAge = userAge;
  }
  display(): void {
    console.log(`Name : ${this.userName}, Age : ${this.userAge} Student ID : ${this.studentId}`);
  }
}

let user1 = new User("tushar", 23, 2145623);
user1.display();
