//  enum => store constants value; duplicate value is not allowed here
// enum types => numeric, string, hetergenous
// numeric Enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.deleteData);
// console.log(RequestType["readData"]);
// string Enum
var RequestType2;
(function (RequestType2) {
    RequestType2[RequestType2["readData"] = 0] = "readData";
    RequestType2[RequestType2["saveData"] = 1] = "saveData";
    RequestType2[RequestType2["deleteData"] = 2] = "deleteData";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// console.log(RequestType2.saveData);
// console.log(RequestType2["deleteData"]);
// hetergenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["userName"] = "Tushar";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
console.log(RequestType3.userName);
console.log(RequestType3["id"]);
