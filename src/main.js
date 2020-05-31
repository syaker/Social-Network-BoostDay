import { changeView } from './controller/controler_views.js'

const init = () => {
	changeView(window.location.hash)
	window.addEventListener('hashchange', () => changeView(window.location.hash));

}

window.addEventListener('load', init);