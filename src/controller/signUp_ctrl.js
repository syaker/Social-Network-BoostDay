import { objViews } from "./obj_views.js";

export default () => {
  const viewSignup = objViews.SignUp();
  viewSignup.querySelector(".register").addEventListener("click", () => {
    console.log("funciona el signUp");
  });
  return viewSignup;
};
