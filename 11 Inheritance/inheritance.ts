// Parent class User

class User {
  userName: string;
  userId: number;

  constructor(userName: string, userId: number) {
    this.userName = userName;
    this.userId = userId;
  }
  display(): void {
    console.log(`usrName: ${this.userName}, userId: ${this.userId} `);
  }
}

// Child class access to parent class (super key-word)

class Student extends User {
  stdAge: number;
  constructor(userName: string, userId: number, stdAge: number) {
    super(userName, userId);
    this.userName = userName;
    this.userId = userId;
    this.stdAge = stdAge;
  }

  stdDisplay(): void {
    console.log(`userName : ${this.userName}, user ID : ${this.userId}, student Age : ${this.stdAge}`);
  }
}

let std1 = new Student("Tushar", 2146, 23);
std1.stdDisplay();

let std2 = new Student("Nadia", 8031, 25);
std2.stdDisplay();
