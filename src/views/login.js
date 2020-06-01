export default () => {
  const viewLogin =`
    <section class="LogIn">
      <img class="imgLogin" src="../all_images/Login.png"></img>
      <div class="entries">
        <input type="text" class="email" placeholder="Email"></input>
        <input type="password" class="pass" placeholder="Password"></input>
      </div>
      <button type="submit">Ingresar</button>
	  <p>O ingresa con...</p>
	  <div class="icons">
	  <img class="iconFace" src="../all_images/facebook.png"></img>
	  <img class="iconGoogle" src="../all_images/iconogoogle.png"></img>
	  </div>
	</section>`;
	const divHTML = document.createElement('div');
	divHTML.innerHTML = viewLogin;
	return divHTML;
};