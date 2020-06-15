import { objViews } from "../views/obj_views.js";
import { dataPost } from "../model/publications.model.js";
import { userData } from "../model/users.model.js";

export default () => {
  const viewPublications = objViews.Publications();
  userData.imgHead(); // Cambia img de encabezado
  const divImgPreview = viewPublications.querySelector("#image-preview-div");
  const userID = firebase.auth().currentUser.uid;
  const folderImg = "imgPublished";
  dataPost.getData(userID); //Obtener datos y actualizar en tiempo real

  const buttonPublicate = viewPublications.querySelector(".publicate");
  buttonPublicate.addEventListener("click", () => {
    const txtWriting = viewPublications.querySelector(".writePublication").value;
    const imgPreview = document.querySelector(".imgPreview");
    let urlImage = "";
      //Limpia campos
      viewPublications.querySelector(".writePublication").value = "";
      viewPublications.querySelector(".publications").innerHTML = "";

    if (imgPreview) {
      urlImage += imgPreview.getAttribute("src");
      //Funcion que sube la imagen a storage
      dataPost.uploadImage(buttonUpload, folderImg);
      //Funcion que crea una nueva publicacion
      dataPost.newPublication(txtWriting, urlImage);
      buttonUpload.value = "";
      divImgPreview.innerHTML = "";
    } else {
      if (txtWriting.length === 0) {
        console.log("Debes incluir un mensaje o una imagen");
      } else {

        dataPost.newPublication(txtWriting, urlImage);
      }
    }
  });

  const buttonUpload = viewPublications.querySelector(".uploadimg");
  buttonUpload.addEventListener("change", () => {
    //Funcion de previsualizacion
    dataPost.showPreviewImage(divImgPreview, buttonUpload);
  });
  const buttonSendComment = document.querySelector(".pushComment");

  const buttonSignOut = viewPublications.querySelector(".signOut");
  buttonSignOut.addEventListener("click", () => {
    userData.signOutSession();
  });
  return viewPublications;
};

//IMPORTANTE: Tengo que tener cuidado con lo siguiente ya que al hacer click al boton
//Lo que hago es insertar la imagen en el div de publicacion y no lo que creo que puede
//provocar luego es que al cambiar la imagen de perfil y al hacer click me coloque la imagen inicial
//

// let startImage = "../all_images/avatar-female.png";
// const startImageProfile = () => {
//   viewPublications.querySelector(".imgProfile").innerHTML = `<img src=${startImage}></img>`;
// };

// startImageProfile();
//Cuidado con eso, pero por mientras...
