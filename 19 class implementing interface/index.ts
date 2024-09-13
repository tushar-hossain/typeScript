// Create a class interface
interface UserFormatter {
  userFormat: () => string;
}

class User implements UserFormatter {
  constructor(private userName: string, private age: number) {}
  userFormat = () => {
    return `name: ${this.userName}, age: ${this.age}`;
  };
}

let user = new User("Mr. potato", 22);

// console.log(user);
console.log(user.userFormat());
