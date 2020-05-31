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
	
		default:
			break;
	}
}

export { changeView }