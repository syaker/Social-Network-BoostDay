import { objViews } from "./obj_views.js";

export default () => {
  const viewLogin = objViews.LogIn();
  const btEnter = viewLogin.querySelector(".btEnter");
  btEnter.addEventListener("click", () => {
    console.log("funciona el login");
  });
  return viewLogin;
};
