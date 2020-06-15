
//CREACION DE REFERENCIAS

//Hace referencia al servicio de Cloud Storage
const storageService = firebase.storage();

//Referencia: Indicativo hacia un objeto :)

// Hace referencia al deposito raiz de Cloud
var storageRef = storageService.ref();

// Anade una refencia secundaria (como una carpeta dentro del directorio)
// Una referencia hija
var imagesRef = storageRef.child('images');
// imagesRef hace referencia a la  "ruta" images

// Las referencias hijas si apuntan a otra ruta se delimitan con un '/'
var spaceRef = storageRef.child('images/space.jpg');
// spaceRef hace referencia "images/space.jpg"
// imagesRef sigue haciendo referencia a la "ruta" --> "images"

//NAVEGAR ENTRE LAS REFERENCIAS

// La propiedad parent permite subir un nivel de la referencia
//En este caso esta pidiendo el parent de spaceRef (images/space.png) que simboliza e archivo space.png
//Por lo tanto seria 'images'
var imagesRef = spaceRef.parent;

// La propiedad root permite subir a la raiz de todo
//La raiz seria el mismo deposito de Cloud Storage :D
var rootRef = spaceRef.root;
// rootRef simboliza la raiz

//OBTENER DATOS DE LAS REFERENCIAS (NOMBRE DEL ARCHIVO, RUTA COMPLETA DEL ARCHIVO Y DONDE ESTA ALMACENADO)

//---Obtener el nombre del archivo o lo que es lo mismo, el ultimo pedazo de la ruta---
//spaceRef es igual images/space.png
spaceRef.name
//Esto seria igual a space.png

//---Obtener la ruta completa o la referencia completa al objeto---
spaceRef.fullPath
//Esto haria referencia a images/space.png

//---Obtener el sitio donde se almacena ese objeto (el directorio raiz)---
spaceRef.bucket


//----------------MANDAMIENTOS PARA UNA REFERENCIA------------
//Caracter UNICODE:

//1.- LA LONGITUD DE LA REFERENCIA DEBE SER MENOR DE 1024 BYTES 
//2.- NO SE PERMITEN SALTO DE LINEA NI CARACTER DE SALTO DE CARRO
//3.- NO SE PERMITEN LOS CARACTERES #, [, ], O ?


//EJERCICIO 2
//Guardando el metodo en una variable, simboliza servicio de Cloud storage
const storage = firebase.storage();

//Guardando en una variable el metodo para crear una referencia a partir del deposito de Storage
const refStorage = storage.ref()

//Variable que contiene el nuevo nodo creado a partir de la referencia al deposito Storage
const recipesRef = refStorage.child('recipes');

//Variable que hace refencia a la ruta cookies.doc
const cookiesRef = refStorage.child('recipes/cookies.doc');

//Variable que hace referencia a la ruta que contiene al objeto lomosaltado.doc
const lomosaltado = refStorage.child('recipes/lomosaltado.doc');

//Hace referencia a lo que contiene el archivo lomosaltado.doc
lomosaltado.parent

//Hace referencia al nombre del archivo o al ultimo extracto de la ruta completa
lomosaltado.name

//Hace referencia a la ruta raiz de todo
lomosaltado.bucket


//----------------SUBIR ARCHIVOS A CLOUD STORAGE------------------
// Crear una referencia a la raiz de storage
var storageRef = firebase.storage().ref();

// Crear una referencia al archivo 'mountain.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// Aunque los nombres de los archivos son los mismos las referencias apuntan a diferentes archivos
//Fijate que son rutas distintas
mountainsRef.name === mountainImagesRef.name            // true --> mismos nombres
mountainsRef.fullPath === mountainImagesRef.fullPath    // false --> diferente referencia de donde estan


