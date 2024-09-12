// noUnusedLocals => error mesage => 'x' is declared but its value is never read.

// noUnusedParameters => Parameter error => 'message' is declared but its value is never read.

const display = (message: string) => {
  let x: number = 20;
  console.log("Hi i am function");
};

display();
