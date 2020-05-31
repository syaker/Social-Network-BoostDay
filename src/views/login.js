export default () => {
  const viewLogin =
    `<section class='LogIn'>
      <img class="imgLogin"></img>
      <div class="entries">
        <input class="email"></input>
        <input class="pass"></input>
      </div>
      <button>Ingresar</button>
      <p>O ingresa con...</p>
	  <img class="iconFace"></img>
	  <img class="iconGoogle"></img>
	</section>`;
	const divHTML = document.createElement('div');
	divHTML.innerHTML = viewLogin;
	return divHTML;
};
