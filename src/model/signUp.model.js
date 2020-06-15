//Aqui voy a colocar todas mis funciones que me sirvan para registrar al usuario
const signUpWithEmail = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
const signUpWithGoogle = () => {};
const signUpWithFacebook = () => {};

export const methodsSignUp = {
  signUpWithEmail,
  signUpWithFacebook,
  signUpWithGoogle,
};
