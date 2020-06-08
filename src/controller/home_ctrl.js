import { objViews } from "./obj_views.js";

export default () => {
	const viewHome = objViews.Home();
	viewHome.querySelector('.enter').addEventListener('click', () => {
		return objViews.LogIn();
	})
	viewHome.querySelector('.register').addEventListener('click', () => {
		return objViews.SignUp();
	})
	return viewHome;
}