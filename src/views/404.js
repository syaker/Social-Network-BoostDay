export default () => {
  const view404 = `
		<img class="img404" src="../all_images/404.png"></img>
		<p class="txtups">Ups...parece que la página que estás<br> buscando no existe </br>
		</p>
		<button class="back-publications">Regresar</button>`;

  const divHTML = document.createElement("div");
  divHTML.innerHTML = view404;
  return divHTML;
};