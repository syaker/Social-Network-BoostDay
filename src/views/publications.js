//CAMBIAR CONTENIDO DE PUBLICATIONS
export default () => {
  const viewPublications = `
	  <header>
	  <img class="logOut" href="#/"></img>
	  </header>
	  <section class="head-publications">
	  <div class="imgProfile"></div>
	  <div class="imgCover"></div>
	  <p class="nameUser"></p>
	  </section>
	  <section class="createPublication">
	  <p>¿Que deseas compartir?</p>
	  <div class="newPublication">
	  <input class="writePublication" placeholder="Escribe algo..."></input>
	  <button class="publication publicate">Publicar</button>
	  <button class="publication uploadimg">Subir imagen</button>
	  </div>
	  </section>
	  <section class="publications">
	  <div class="publication">
		  <button class="menuHamburguer"></button>
		  <button class="private-public"></button>
		  <div class="imgUser"></div>
		  <div class="imgPublication"></div>
		  <p class="txtPublicate"></p>
		  <div class="likes">
			  <img class="like"></img>
			  <p type="number" class="accountant"></p>
		  </div>
	  </div>
	  </section>`;
  const divHTML = document.createElement("div");
  divHTML.innerHTML = viewPublications;
  return divHTML;
};
