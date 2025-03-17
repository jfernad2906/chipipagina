function pedirNumeroEnRango(min, max) {
var numero;
do {
  numero = prompt("Mete un numero entre " + min +" y " + max + ":");
  numero = Number(numero);
} while (numero < min || numero > max);

return numero;
}
function pedirNumeroEnRangoMejorado(texto,min, max) {
var numero;
do {
  numero = prompt(texto + min +" y " + max + ":");
  numero = Number(numero);
} while (numero < min || numero > max);

return numero;
}
