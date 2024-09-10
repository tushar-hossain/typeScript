abstract class User {
  userName: string;
  userAge: number;
  constructor(userName: string, userAge: number) {
    this.userName = userName;
    this.userAge = userAge;
  }
  abstract display(): void;
}

class Student extends User {
  studentID: number;
  constructor(userName: string, userAge: number, studentID: number) {
    super(userName, userAge);
    this.studentID = studentID;
  }
  display(): void {
    console.log(`userName: ${this.userName}, userAge: ${this.userAge}, studentID: ${this.studentID}`);
  }
}

let std1 = new Student("Tushar", 2146, 25);
std1.display();
let std2 = new Student("Shahin", 2097, 23);
std2.display();
