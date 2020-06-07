import { objViews } from './obj_views.js'

const changeView = (path) => {
	const container = document.querySelector('#all_content');
	container.innerHTML = '';
	switch (path) {
		case '': { return container.appendChild(objViews.Home()) }
		case '#/': { return container.appendChild(objViews.Home()) }
		case '#/login': { return container.appendChild(objViews.LogIn()) }
		case '#/profile': { return container.appendChild(objViews.Profile()) }
		case '#/publications': { return container.appendChild(objViews.Publications()) }
		case '#/signup': { return container.appendChild(objViews.SignUp()) }
		case '#/404': { return container.appendChild(objViews.NotFound()) }

		default:
			return container.appendChild(objViews.NotFound());
			break;
	}
}

export { changeView }