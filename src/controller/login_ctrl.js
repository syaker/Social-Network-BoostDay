import { objViews } from "../views/obj_views.js";
import { methodsAuth } from "../model/logIn.model.js";
import { userData } from "../model/users.model.js";

export default () => {
  const viewLogin = objViews.LogIn();
  const btEnter = viewLogin.querySelector(".btEnter");
  btEnter.addEventListener("click", () => {
    const email = viewLogin.querySelector(".email").value;
    const password = viewLogin.querySelector(".pass").value;
    methodsAuth
      .authUserEmail(email, password)
      .then((result) => {
		window.location.hash = "#/publications";
      })
      .catch((error) => {
        const nameError = error.code;
        console.log(error);
        if (nameError === "auth/user-not-found") {
          console.log("El usuario no existe");
        } else if (nameError === "auth/invalid-email") {
          console.log("Email invalido");
        } else if (nameError === "auth/wrong-password") {
          console.log("La contrasena no es valida");
        }
      });
  });
  return viewLogin;
};
