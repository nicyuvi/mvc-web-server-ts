// DATA
const USERS = [
  {
    id: 1,
    name: "foo",
  },
  {
    id: 2,
    name: "bar",
  },
  {
    id: 3,
    name: "baz",
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
  action: string | undefined;
  constructor(action: string | undefined) {
    this.action = action;
  }
}

/*###########################################################*/

// CONTROLLERS
// controllers can depend on each other
// /users | get all users
// /users/{id} | get single user
class UsersController extends Router {
  constructor(action?: string) {
    super(action);
    if (this.action === "default") {
      this.Index();
    }
  }

  protected Index() {
    const users = this.GetUsers();

    // template
    const users_template = `
      Users Page

      Number of users: ${users.length}
    `;

    // render VIEW
    console.log(users_template);
  }

  // get users from db
  public GetUsers(): User[] {
    // query db
    const users: User[] = USERS;
    return users;
  }
}

// Home ROUTE calls controller
class HomeController extends Router {
  constructor(action?: string) {
    super(action);
    if (this.action === "default") {
      this.Index();
    }
  }

  protected Index() {
    let users_controller = new UsersController();
    const users = users_controller.GetUsers();

    // template
    const home_template = `
      Home Page

      Number of users: ${users.length}
    `;
    // render VIEW
    console.log(home_template);
  }
}

// change this to call router directly

// ** APP LISTENING ON PORT 3000 **

// app receives http request
// handle request using the Router
const CLIENT_REQUEST_HOME = "/";
const CLIENT_REQUEST_USERS = "/users";
// class ROUTE_MAP {
//   url: string = "";
//   action: string = "";
// }

if (CLIENT_REQUEST_HOME === "/") {
  new HomeController("default");
}

if (CLIENT_REQUEST_USERS === "/users") {
  // app receives other http request
  new UsersController("default");
}
//
