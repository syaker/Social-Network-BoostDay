//Aqui voy a colocar todas mis funciones que me sirvan para registrar al usuario
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
  });email-password.html