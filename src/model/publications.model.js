//Nueva publicacion
const newPublication = (txt, imgPublished) => {
  const user = firebase.auth().currentUser;
  firebase
    .firestore()
    .collection("publications")
    .add({
      userID: user.uid,
      text: txt,
      imgUser: user.photoURL,
      imgPublished: `<img src=${imgPublished}></img>`,
    });
};

//Actualizar en tiempo real con onSnapShot y obtener datos
const getData = (userID) => {
  firebase
    .firestore()
    .collection("publications")
    .onSnapshot((allPublications) => {
      allPublications.forEach((publication) => {
        if (userID === publication.data().userID) {
          const showPublication = `
			<section class="publication">
			<section class="all-info">
			<section class="inf-post">
				<div class="buttons-post">
					<button class="menuHamburguer">
					<span class="menuPoints">
					<span>
					</button>
					<button class="private-public"></button>
				</div>
				<div class="imgUser"><img src=${publication.data().imgUser}></img></div>
				<p class="txtPublicate">"${publication.data().text}"</p>
				<div class="likes">
					<img class="like"></img>
					<p type="number" class="accountant"></p>
				</div>
			</section>
		<div class="imgPublication">${publication.data().imgPublished}</div>
		</section>
		<section class="comments">
		  <section class="commentsArea"></section>
		  <div class="newComment">
		  <input type="text" class="writeComment"></input>
		  <button class="pushComment">Enviar</button>
		  </div>
		</section>
		</section>`;
          document.querySelector(".publications").innerHTML += showPublication;
        } else {
			console.log(`No es una publicacion del usuario ${userID}`)
		}
      });
    });
};

//Funcion para previsualizar la imagen

const showPreviewImage = (container, inputType) => {
  //1. Aqui se selecciona el input tipo "file" que devuelve un objeto que contiene ~
  //una propiedad "0" con los archivos seleccionados (FilesList).
  //Se accede a la propiedad "0" para seleccionar el archivo seleccionado por el usuario
  //Esto a su vez devuelve un objeto con el contenido del archivo en propiedades (nombre, hora, etc.)
  const fileToUpload = inputType.files[0];
  const reader = new FileReader();
  //Callback que se llamara luego que la tarea de leer como URL termine
  reader.onloadend = () => {
    const url = reader.result;
    const imgPreview = `<img class='imgPreview' file=${fileToUpload} src='${url}'>`;
    //Elemento HTML que contendra la imagen
    container.innerHTML = imgPreview;
  };
  reader.readAsDataURL(fileToUpload);
};

//Funcion para cargar la imagen

const uploadImage = (inputType, nameOfDirectory) => {
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const nameOfFile = inputType.files[0].name.toString();
  const fileRef = storageRef.child(nameOfDirectory + "/" + nameOfFile);
  const file = inputType.files[0];
  fileRef.put(file).then((snapshot) => {
    console.log("Se ha subido el archivo");
  });
};

//Funcion para publicar comentario
const publicateComment = () => {};

export const dataPost = {
  newPublication,
  getData,
  showPreviewImage,
  uploadImage,
};
