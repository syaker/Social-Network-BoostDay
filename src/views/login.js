export default () => {
  const viewLogin = ` 	
	<section class="LogIn">
	<a href="#/" class="logout-icon"><img class="logout-black" src="../all_images/logout-black.png"></img></a>
      <img class="imgLogin" src="../all_images/Login.png"></img>
      <div class="entries">
        <input type="email" class="email" placeholder="Email"></input>
        <input type="password" class="pass" placeholder="Password"></input>
	  </div>
	  <p id="registerAccount">¿No tienes cuenta?<a href="#/signup"> Regístrate</a></p>
      <button type="submit" class="btEnter">Ingresar</button>
	  <p>O ingresa con...</p>
	  <div class="icons">
	  <a href="" class="i-face"><img class="iconFace" src="../all_images/facebook.png"></img></a>
	  <a href="" class="i-google"><img class="iconGoogle" src="../all_images/iconogoogle.png"></img></a>
	  </div>
	</section>`;
  const divHTML = document.createElement("div");
  divHTML.setAttribute("id", "div-login");
  divHTML.innerHTML = viewLogin;
  return divHTML;
};