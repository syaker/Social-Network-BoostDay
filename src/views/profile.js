//CAMBIAR CONTENIDO DE PROFILE
export default () => {
  const viewProfile = `
  <header class="header-profile">
  </header>
  <section class="head-profile">
	  <div class="imgCover"></div>
	  <div class="imgProfile"></div>
	  <p class="nameUser"></p>
  </section>
  <section class="information-user">
	  <div class="boxName">
	  <img src="./all_images/pen.png"></img>
	  <input class="i-pro name" placeholder="Name"></input>
	  </div>
	  <div class="boxEmail">
	  <img src="./all_images/pen.png"></img>
	  <input class="i-pro email" placeholder="Email"></input>
	  </div>
	  <input type="password" class="i-pro password"></input>
	  <button class="upload imgProfile">Subir imagen de perfil</button>
	  <button class="upload imgCover">Subir imagen de portada</button>
	  <button class="upload back">Regresar</button>
  </section>`;

  const divHTML = document.createElement("div");
  divHTML.setAttribute("id", "div-profile");
  divHTML.innerHTML = viewProfile;
  return divHTML;
};
