//Este documento es mi trabajo sobre arreglos y sus variantes

//Hecho por Alejandra Tamayo el dia 04-marzo-2020

//Declaración de un Arreglo

//Se declara una variable y se asigna al arreglo

//ship para los corchetes

var fruta=[];

document.write("-¿Qué tienen el Arreglo de fruta?" + fruta + " Esta vacio" +"<br>");

//segunda forma de declarar una variable y se asigna al Arreglo

var fruta= new Array();

//Fruta ahora vale Guama

fruta=["Guama"];

//Muestra y comprueba que fruta ahora vale Guama

document.write("<br> -¿Qué tiene ahora el Arreglo de fruta? : ", fruta + "<br>");

//Voy a llenar un nuevo Arreglo con muchas frutas

var frutas=[" Manzanas", " Bananos", " Piñas", " Naranjas", " Peras"];

//Lo voy mostrar el Arreglo en pantalla

document.write("<br> -Estas son las frutas del Arreglo: " + frutas + "<br>");

//Voy a escoger una fruta del Arreglo

document.write("<br> -Esta es la fruta escogida del Arreglo: " + frutas[0] + "<br>");

//Para escoger varios elementos del Arreglo

document.write("<br> -Estas son las frutas escogidas por el Arreglo: "+frutas[0]+", "+frutas[4]+ "<br>");

//Quiero saber ¿Cuál es mi primera fruta?

var primero =frutas[0];

//Quiero saber cual es la última fruta de mi Arreglo

//.length es para saber el tamaño del Arreglo y el -1 es para que cuente de 1 a 4
// ya que descuenta 1 al arreglo.

var ultima =frutas[frutas.length -1];

document.write("<br> -Esta es la primera fruta de mi Arreglo: " +primero+ "<br>");

document.write("<br> -Esta es la última fruta de mi Arreglo: " +ultima+ "<br>");

//Añadir elemento al final de un Arreglo
//Cuando se usa funciones de Arreglos como push se utiliza comillas sencillas.('')
//Cuando se utilizan document.write se utilizan las comillas dobles. ("")

var nuevalongitud = frutas.push(' Papaya',);

//Aquí muestra el tamaño de mi Arreglo y los elementos del mismo

document.write("<br> -Esta es la última longitud del Arreglo de frutas: " + nuevalongitud + "<br>");

//De esta manera se puede mostrar el arreglo

document.write("<br> -Este es el Arreglo completo: " + frutas +"<br>")

//Agrega mas datos al Arreglo en este caso, agrega frutas.

var nuevalongitud=frutas.push(' Limón', ' Feijoa');

//Muestar la cantidad de datos en el Arreglo

document.write("<br> -Esta es la última longitud del Arreglo de frutas: " + nuevalongitud + "<br>");

//Muestra la totalidad de datos en el Arreglo

document.write("<br> -Este es el Arreglo completo:" + frutas+ "<br>")

//Elimina un elemento del Arreglo

var ultima = frutas.pop();

//Muestra el último elemento eliminado
document.write("<br> -Esta es la última fruta de mi Arreglo: " + ultima);
//elimina elemnto al final de un Array
var elimina=frutas.shift();
document.write("<br> -Este es el elemento que se elimino al principio:" + elimina);
document.write("<br> -Ahora esta es la primera fruta del arreglo:" + frutas[0]);
var nnuevalongitud=furtas.length;
document.write("<br> -Este es el tamaño del arreglo:" + nnuevalongitud);
document.write("<br> -Este es el Arreglo completo:" + frutas+ "<br>")

//Bucle sobre un Array y uso del foreach
//¿que es un foreach y for?
//Ejecuta la funcion indicada dependiendo la cantidad de elementos del arreglo +1
//el for establece una variable de inicio fin y de la iteracion
document.write("<br> Así esta organizado el arreglo con nombre y posiciones: <br>")
frutas.foreach(function (elemento, indice, array){
	//el arreglo frutas lo meti en una matriz es el ordenamiento
	document.write(indice, " ", elemento, "<br>")
});

//Encontrar el indice de un elemento en el array
document.write("<br>")

frutas.push('Anon')

var pos= frutas.indexof('Papaya')//(pos)es la posicion para abreviar

document.write("<br>El elemento encontrado esta en la posicion: <br>");
document.write(pos);

document.write("<br> Estas son las frutas del arreglo ahora: "+frutas+"<br>");

//bucle sobre un Array
