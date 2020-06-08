import { ctrlViews } from "./index.js";

//Este es el controlador de las vistas segun la ruta

const changeView = (path) => {
  //Selecciona el div padre
  const container = document.querySelector("#all_content");
  //Lo limpia de cualquier contenido
  container.innerHTML = "";
  //Identifica el caso para mostrar el contenido segun la ruta
  switch (path) {
    //Retorna un nuevo nodo en el div padre que contiene el html de cada vista
    case "": {
      return container.appendChild(ctrlViews.viewHome());
    }
    case "#/": {
      return container.appendChild(ctrlViews.viewHome());
    }
    case "#/login": {
	  return container.appendChild(ctrlViews.viewLogin());
    }
    case "#/profile": {
      return container.appendChild(ctrlViews.viewProfile());
    }
    case "#/publications": {
      return container.appendChild(ctrlViews.viewPublications());
    }
    case "#/signup": {
      return container.appendChild(ctrlViews.viewSignup());
    }

    default:
      return container.appendChild(ctrlViews.viewNotFound());
      break;
  }
};
//Se exporta para ser utilizado en el archivo principal
export { changeView };
