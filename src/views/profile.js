//CAMBIAR CONTENIDO DE PROFILE
export default () => {
  const viewProfile = `
  <header class="header-profile">
  <a href="#/" class="logout-icon"><img class="logout-white" src="../all_images/logout-white.png"></img></a>
  <img src="" class="i-header logout"></img>
  </header>
  <section class="head-profile">
	  <div class="imgCover"></div>
	  <div class="imgProfile"></div>
	  <p class="nameUser"></p>
  </section>
  <section class="information-user">
	  <div class="boxName">
	  <label class="label-name"><label>
	  <a id="editName"><img src="./all_images/pen.png"></img></a>
	  <input type="text" class="i-pro name" disabled=disabled>Te ofende</input>
	  </div>
	  <div class="boxEmail">
	  <input type="text" class="i-pro email" disabled=disabled></input>
	  </div>
	  <div class="boxPass">
	  <label class="label-pass"><label>
	  <a id="editPassword"><img src="./all_images/pen.png"></img></a></img>
	  <input type="password" class="i-pro password" disabled=disabled></input>
	  </div>
	  <div class="buttons">
	  <div class="buttons-upload">
	  <button class="upload imgProfile">Subir imagen perfil</button>
	  <button class="upload imgCover">Subir imagen portada</button>
	  </div>
	  <button class="upload back">Regresar</button>
	  </div>
  </section>`;

  const divHTML = document.createElement("div");
  divHTML.setAttribute("id", "div-profile");
  divHTML.innerHTML = viewProfile;
  return divHTML;
};


