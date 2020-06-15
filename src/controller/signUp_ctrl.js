import { objViews } from "../views/obj_views.js";
import { methodsSignUp } from "../model/signUp.model.js";
import { changeProfile } from "../model/profile.model.js";

export default () => {
  const viewSignup = objViews.SignUp();
  viewSignup.querySelector(".register").addEventListener("click", () => {
    const name = viewSignup.querySelector(".name").value;
    const email = viewSignup.querySelector(".email").value;
    const password = viewSignup.querySelector(".pass").value;
    const repeatPassword = viewSignup.querySelector(".repeatPass").value;
    console.log(password, repeatPassword);
    if (password == repeatPassword) {
      methodsSignUp
        .signUpWithEmail(email, password)
        .then((result) => {
          window.location.hash = "#/publications";
          changeProfile.updateUser(name, photoUser);
        })
        //Aqui se resuelven los errores que puedan ocurrir
        .catch((error) => {
          const nameError = error.code;
          if (nameError === "auth/email-already-in-use") {
            console.log("El email ya esta en uso");
          } else if (nameError === "auth/weak-password") {
            console.log("Contrasena minimo de 6 caracteres");
          }
        });
    } else {
      console.log("Las contrasenas no coinciden");
    }
  });
  return viewSignup;
};
