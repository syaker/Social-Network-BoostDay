//Cambiar contrasena de usuario
const changePassword = (newPass) => {
	const user = firebase.auth().currentUser;
	const newPassword = newPassword;
	user.updatePassword(newPass)
	.then(() => {
	  console.log('Contrasena actualizada');
	}).catch((error) => {
	  console.log('error');
	});
}

//Editar nombre y foto de usuario
const updateUser = (name, photoUser) => {
	const user = firebase.auth().currentUser;
	user
	  .updateProfile({
		displayName: name,
		photoURL: photoUser,
	  })
	  .then(() => {
		console.log("Se ha editado la info del usuario");
	  })
	  .catch((error) => {
		console.log(error);
	  });
  };


export const changeProfile = {
	changePassword,
	updateUser,
}