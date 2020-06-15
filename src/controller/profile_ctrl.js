import { objViews } from "../views/obj_views.js";
import { changeProfile } from "../model/profile.model.js";

export default () => {
	const viewProfile = objViews.Profile();
	const name = viewProfile.querySelector('.name');
	const password = viewProfile.querySelector('.password');
	return viewProfile;
}