// DATA
const USERS = [
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
class User {
  public id: number;
  public name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

/*###########################################################*/

// ROUTER
// calls respective controllers
class Router {
  url: string; // url
}

/*###########################################################*/

// CONTROLLERS
// controllers can depend on each other
class UsersController {
  // receive http GET request from client GET /users
  // get users from db
  public GetUsers(): User[] {
    // query db
    const users: User[] = USERS;
    return users;
  }
}

// Home ROUTE calls controller
class HomeController extends Router {
  constructor(url: string) {
    super();
    this.url = url;

    if (url === "/") {
      this.Index();
    }
  }

  Index() {
    let users_controller = new UsersController();
    const users = users_controller.GetUsers();

    // template
    const users_template = `Number of users: ${users.length}`;

    // render VIEW
    console.log(users_template);
  }
}

// change this to call router directly
// const home_route = new HomeController("/");

// ** APP LISTENING ON PORT 3000 **

// app receives http request
// handle request using the Router

// app receives other http request
//
