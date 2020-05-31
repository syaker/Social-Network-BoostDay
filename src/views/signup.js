export default () => {
  const viewSignUp = `<section class='SignUp'>
		<img class="imgSignUp"></img>
		<div class="entries">
		  <input class="name"></input>
		  <input class="email"></input>
		  <input class="pass"></input>
		  <input class="repeatPass"></input>
		</div>
		<button>Registrarse</button>
		<p>O registrate con...</p>
		<img class="iconFace"></img>
		<img class="iconGoogle"></img>
	  </section>`;
  const divHTML = document.createElement("div");
  divHTML.innerHTML = viewSignUp;
  return divHTML;
};
