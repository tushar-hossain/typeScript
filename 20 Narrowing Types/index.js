function printTodos(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todos");
    }
    //   if (typeof todos === "object") {
    //     todos.map((todo) => console.log(todo));
    //   } else if (typeof todos === "string") {
    //     console.log(todos);
    //   }
}
var todos = ["todo1", "todo2"];
printTodos(todos);
printTodos(null);
// printTodos("todo1");
