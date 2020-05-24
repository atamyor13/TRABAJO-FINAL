//Esta es la continuidad de mi ejercicios de arreglos
//25 de Marzo de 2020 autor: Alejandra Tamayo Rivera

var amigos= ["Santigo"," Alejandro"," Juanita"];
//amigos.length Este me dice cual es el numero de elementos de mi arreglo
document.write("Tienes "+amigos.length+" Amigos: " + "<br>")
// Hasta ahi yo no tenia mas de 3 personas por eso solo cuenta tres
amigos[amigos.length]= " Adriana";
//No se pueden agregar mas elementos en una sola posicion por eso hay que hacerlo de nuevo
amigos[amigos.length]= " Brayan";
document.write(amigos);

//Con push agrega un elemnto al final o los elementos que quiero al final
amigos.push(" Milagros", " Aranis", " Brandon");
document.write("<br>"+amigos)

//Borrar la ultima posición
amigos.pop();
document.write("<br>"+amigos);

//Tarea 
//Ejemplo de codigo, de for y for each
//Separen el arreglo de frutas en comas sobre el codigo del profe
//ver los videos de los if y for
//del video del codigo, y sobre ese se deja una tarea completando el codigo y se lo enviamos
//enviarlo al correo