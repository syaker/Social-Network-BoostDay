export default () => {
  const viewSignUp = `<section class='SignUp'>
		<img class="imgSignUp" src="../all_images/SignUp.png"></img>
		<div class="entries">
		  <input class="name" placeholder="Nombre"></input>
		  <input class="email" placeholder="Email"></input>
		  <input class="pass" placeholder="Contraseña"></input>
		  <input class="repeatPass" placeholder="Repetir contraseña"></input>
		</div>
		<button>Registrarse</button>
		<p>O registrate con...</p>
		<div class="icons">
		<img class="iconFace" src="../all_images/facebook.png"></img>
		<img class="iconGoogle" src="../all_images/iconogoogle.png"></img>
		</div>
	  </section>`;
  const divHTML = document.createElement("div");
  divHTML.innerHTML = viewSignUp;
  return divHTML;
};
