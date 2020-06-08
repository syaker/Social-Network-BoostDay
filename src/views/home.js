export default () => {
  const header = `<header class='header_home'>
			<button class='about'>ABOUT ME</button>
		</header>`;
  const viewHome = `
	${header}
  <section class="home">
    <img class="logo_boost" src="../all_images/Logo.png"></img>
    <div class="buttons">
      <button class="enter"><a href="#/login">INICIAR SESIÓN</a></button>
      <button class="register"><a href="#/signup">REGISTRARSE</a></button>
      <p>Ó</p>
    </div>
    <p>
	  Comparte tips, rutinas, métodos <br> y todo lo que hagas para organizarte dia a dia.
    </p>
  </section>`;
  const divHTML = document.createElement("div");
  divHTML.setAttribute("id", "div-home");
  divHTML.innerHTML = viewHome;
  return divHTML;
};
