var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// DATA
var USERS = [
    {
        id: 1,
        name: "John",
    },
    {
        id: 2,
        name: "Doe",
    },
];
// MODEL
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    return User;
}());
/*###########################################################*/
// ROUTER
// calls respective controllers
var Router = /** @class */ (function () {
    function Router() {
    }
    return Router;
}());
/*###########################################################*/
// CONTROLLERS
// controllers can depend on each other
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    // receive http GET request from client GET /users
    // get users from db
    UsersController.prototype.GetUsers = function () {
        // query db
        var users = USERS;
        return users;
    };
    return UsersController;
}());
// Home ROUTE calls controller
var HomeController = /** @class */ (function (_super) {
    __extends(HomeController, _super);
    function HomeController(url) {
        var _this = _super.call(this) || this;
        _this.url = url;
        if (url === "/") {
            _this.Index();
        }
        return _this;
    }
    HomeController.prototype.Index = function () {
        var users_controller = new UsersController();
        var users = users_controller.GetUsers();
        // template
        var users_template = "Number of users: ".concat(users.length);
        // render VIEW
        console.log(users_template);
    };
    return HomeController;
}(Router));
// change this to call router directly
var home_route = new HomeController("/");
