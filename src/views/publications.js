//CAMBIAR CONTENIDO DE PUBLICATIONS
export default () => {
  const viewPublications = `
	  <header class="header-posts">
	  <a href="#/" class="signOut logout-icon"><img class="logout-white" src="../all_images/logout-white.png"></img></a>
	  <a class="lista-icon"><img class="lista-white" src="../all_images/lista.png"></img></a>
	  <img class=""></img>
	  </header>
	  <section id="head-create">
	  <section class="head-publications">
	  <div class="imgProfile"></div>
	  <div class="imgCover"></div>
	  <p class="nameUser"></p>
	  </section>
	  <section class="createPublication">
	  <p id="answer">¿Que deseas compartir?</p>
	  <div class="newPublication">
	  <input class="writePublication" placeholder="Escribe algo..."></input>
	  <div id="image-preview-div"></div>
	  <div id="buttons-publicate">
	  <button class="publication publicate">Publicar</button>
	  <input type="file" class="publication uploadimg">Subir imagen</input>
	  </div>
	  </div>
	  </section>
	  </section>
	  <section class="publications">
	  </section>`;
  const divHTML = document.createElement("div");
  divHTML.setAttribute("id", "div-publications")
  divHTML.innerHTML = viewPublications;
  return divHTML;
};
