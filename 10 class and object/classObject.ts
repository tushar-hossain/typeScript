// Class =>  Properties, Method, Constructor

class Users {
  userName: string;
  userId: number;

  constructor(userName: string, userId: number) {
    this.userName = userName;
    this.userId = userId;
  }
  display(): void {
    console.log(`userName : ${this.userName}, userId : ${this.userId}`);
  }
}

// Class multiple Object Create

let user1 = new Users("shahin", 102);
user1.display();
