const printUserInfo = <X, Y>(userName: X, userAge: Y) => {
  console.log(`name: ${userName}, age: ${userAge}`);
};

printUserInfo("tushar", 23);
printUserInfo("tushar", "23");
// printUserInfo(254, 23);
// printUserInfo(254, "23");
