export default () => {
  const viewSignUp = `<section class='SignUp'>
		<img class="imgSignUp" src="../all_images/SignUp.png"></img>
		<div class="entries">
		  <input class="name"></input>
		  <input class="email"></input>
		  <input class="pass"></input>
		  <input class="repeatPass"></input>
		</div>
		<button>Registrarse</button>
		<p>O registrate con...</p>
		<img class="iconFace" src="../all_images/facebook.png"></img>
		<img class="iconGoogle" src="../all_images/iconogoogle.png"></img>
	  </section>`;
  const divHTML = document.createElement("div");
  divHTML.innerHTML = viewSignUp;
  return divHTML;
};
