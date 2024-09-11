// Encapsulation and access modifier
// access modifier => public, private, protected, readonly
// public => public class every class useable
// private =>  private class only accessible within User class
// protected => userName is protected and only accessible within class 'User' and its subclasses.
// readonly => userAge is a read-only property.

class User {
  public userName: string;
  public userAge: number;
  //   private userName: string;
  //   private userAge: number;
  //   protected userName: string;
  //   protected userAge: number;
  //   readonly userName: string;
  //   readonly userAge: number;

  constructor(userName: string, userAge: number) {
    this.userName = userName;
    this.userAge = userAge;
  }
  display(): void {
    console.log(`userName: ${this.userName}, userId: ${this.userAge} `);
  }
}

class Student extends User {
  studentId: number;
  constructor(userName: string, userAge: number, studentId: number) {
    super(userName, userAge);
    this.studentId = studentId;
  }
  stdDisplay(): void {
    console.log(`userName: ${this.userName}, userId: ${this.userAge}, studentId: ${this.studentId} `);
  }
}

let user1 = new User("tushar", 23);
user1.display();
// user1.userName = 'nadia';
// user1.userAge = 25;

let std1 = new Student("Shahin", 22, 20917523);
std1.stdDisplay();
