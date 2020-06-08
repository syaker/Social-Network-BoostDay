import { changeView } from './controller/controller_views.js'

const init = () => {
	changeView(window.location.hash)
	window.addEventListener('hashchange', () => changeView(window.location.hash));

}

window.addEventListener('load', init);