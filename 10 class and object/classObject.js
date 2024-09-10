// Class =>  Properties, Method, Constructor
var Users = /** @class */ (function () {
    function Users(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    Users.prototype.display = function () {
        console.log("userName : ".concat(this.userName, ", userId : ").concat(this.userId));
    };
    return Users;
}());
// Class multiple Object Create
var user1 = new Users("shahin", 102);
user1.display();
