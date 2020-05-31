export default () => {
  const viewLogin =`
    <section class="LogIn">
      <img class="imgLogin" src="../all_images/Login.png"></img>
      <div class="entries">
        <input class="email"></input>
        <input class="pass"></input>
      </div>
      <button>Ingresar</button>
      <p>O ingresa con...</p>
	  <img class="iconFace" src="../all_images/facebook.png"></img>
	  <img class="iconGoogle" src="../all_images/iconogoogle.png"></img>
	</section>`;
	const divHTML = document.createElement('div');
	divHTML.innerHTML = viewLogin;
	return divHTML;
};
