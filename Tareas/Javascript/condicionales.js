//Archivo para aprender a usas condicionales en diferentes formas
//Alejandra Tamayo Rivera 01/04/20

//Este archivo le vamos a crear para probar los condicionales
//Primer condicional
//Tambien se puede: 
//var nombre= "Alejandra";
//var edad=17;
var nombre= "Alejandra",edad=21;
if (nombre=="Alejandra"){
	document.write("- 1. Bienvenido: "+ nombre+"<br>");
	//condicion entre if y else
}else{
	document.write("-1.Bienvenido eres un invitado");

}
//Terea investigas tipos de operadores+,-,=,==,===,++,--,+++
//Hacer un ejemplo con cada uno de ellos
//Tipos de variables; caracter, numericas, punto flotante, booleanas
//Ejemplos de variables y cuantas mas hay
if(edad>=18){
	document.write("<br>"+"-2.Eres mayor de edad"+"<br>");
}else{
	document.write("<br>"+"-2. No eres mayor de edad"+"<br>");
}

//Combinando 3 opciones
if (edad==18){
	document.write("<br>"+"-3. Eres mayor de edad");
}else if(nombre="Alejandra"){
	document.write("<br>"+"-3. Bienvenido "+nombre);
}else{
	document.write("<br>"+"-3. No eres mayor de edad"+"<br>");
}

//con condiciones puedo usar
// <menor que
// >mayor que
// >=mayor e igual
//<= menor igual que
//==igual que 
//!= distinto de

//Usar distinto de 
if(edad>=18|| nombre=="Alejandra"){
	document.write("<br>"+"-3. Bienvenido, eres mayor de edad "+nombre);
}else{
	document.write("<br>"+ "No esta permitido para menores de edad");
}