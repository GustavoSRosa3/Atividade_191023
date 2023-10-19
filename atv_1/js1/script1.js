// Solicita dois números ao usuário e armazena nas variáveis num1 e num2
var num1 = prompt("Digite o primeiro número");
var num2 = prompt("Digite o segundo número");

// Converte os valores de string para number
num1 = Number(num1);
num2 = Number(num2);

// Compara os números usando uma estrutura de decisão if
if (num1 > num2) {
  // Se o primeiro número for maior que o segundo, exibe o primeiro número no console
  console.log("O maior número é " + num1);
} else if (num1 < num2) {
  // Se o primeiro número for menor que o segundo, exibe o segundo número no console
  console.log("O maior número é " + num2);
} else {
  // Se os números forem iguais, exibe uma mensagem no console
  console.log("Os números são iguais");
}