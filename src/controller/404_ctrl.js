import { objViews } from "../views/obj_views.js";

export default () => {
	const view404 = objViews.NotFound();
	const buttonBack = view404.querySelector('.back-publications');
	buttonBack.addEventListener('click', () => {
		window.history.back();
	})
	return view404;
}