//Aqui voy a colocar todas mis funciones que seas destinadas a logear el usuario
const authUserEmail = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

const authWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const authWithFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export const methodsAuth = {
  authUserEmail,
  authWithGoogle,
  authWithFacebook,
};
