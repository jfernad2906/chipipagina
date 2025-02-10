fuction pedirNumeroEnRango(mín, max) {
var numero;
do {
  numero = prompt("Mete un numero entre " + min +" y " + max + ":");
  numero = Number(numero);
} while (numero < min || numero > max);

return numero;
}
