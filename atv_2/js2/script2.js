// Solicita um número ao usuário e armazena na variável num
var num = prompt("Digite um número");

// Converte o valor de string para number
num = Number(num);

// Verifica se o número é par ou ímpar usando uma estrutura de decisão if
if (num % 2 == 0) {
  // Se o resto da divisão do número por 2 for igual a zero, significa que o número é par
  // Exibe a mensagem "O número é par" no console
  console.log("O número é par");
} else {
  // Se o resto da divisão do número por 2 for diferente de zero, significa que o número é ímpar
  // Exibe a mensagem "O número é ímpar" no console
  console.log("O número é ímpar");
}