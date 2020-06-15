//Observador de usuario (Obtiene datos del usuario activo)
const userWatcher = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario activo");
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const userID = user.uid;
      const providerData = user.providerData;
      // ...
    } else {
      console.log("No existe usuario activo");
    }
  });
};

//Imagen encabezado
const imgHead = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.querySelector(
        ".imgProfile"
      ).innerHTML = `<img src=${user.photoURL}></img>`;
    } else {
      console.log("No existe usuario activo");
    }
  });
};

//Funcion para cerrar sesion
const signOutSession = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Se ha cerrado sesion");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const userData = {
  signOutSession,
  imgHead,
  userWatcher,
};
