import home from "../views/home.js";
import login from "../views/login.js";
import profile from "../views/profile.js";
import publications from "../views/publications.js";
import signUp from "../views/signup.js";
import notFound from "../views/404.js";

//Importamos las vistas para hacer el codigo mas prolijo
export const objViews = {
  Home: home,
  LogIn: login,
  Profile: profile,
  Publications: publications,
  SignUp: signUp,
  NotFound: notFound
};
