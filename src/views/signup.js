export default () => {
  const viewSignUp =`
	  <section class='SignUp'>
		<a href="#/" class="logout-icon"><img class="logout-black" src="../all_images/logout-black.png"></img></a>
		<img class="imgSignUp" src="../all_images/SignUp.png"></img>
		<div class="entries">
		  <input class="name" placeholder="Nombre"></input>
		  <input class="email" placeholder="Email"></input>
		  <input type="password" class="pass" placeholder="Contraseña"></input>
		  <input type="password" class="repeatPass" placeholder="Repetir contraseña"></input>
		</div>
		<p id="haveAccount">¿Ya tienes cuenta?<a href="#/login"> Logueate</a></p>
		<button class="register" type="submit">Registrarse</button>
		<p>O registrate con...</p>
		<div class="icons">
		<a href=""><img class="iconFace" src="../all_images/facebook.png"></img></a>	
		<a href=""><img class="iconGoogle" src="../all_images/iconogoogle.png"></img></a>
		</div>
	  </section>`;
  const divHTML = document.createElement("div");
  divHTML.setAttribute("id", "div-signup");
  divHTML.innerHTML = viewSignUp;
  return divHTML;
};