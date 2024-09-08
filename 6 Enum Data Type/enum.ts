//  enum => store constants value; duplicate value is not allowed here

// enum types => numeric, string, hetergenous

// numeric Enum

enum RequestType {
  readData,
  saveData,
  deleteData,
}

// console.log(RequestType);
// console.log(RequestType.deleteData);
// console.log(RequestType["readData"]);

// string Enum
enum RequestType2 {
  "readData",
  "saveData",
  "deleteData",
}

// console.log(RequestType2);
// console.log(RequestType2.saveData);
// console.log(RequestType2["deleteData"]);

// hetergenous enum
enum RequestType3 {
  userName = "Tushar",
  id = 101,
}

console.log(RequestType3);
console.log(RequestType3.userName);
console.log(RequestType3["id"]);
