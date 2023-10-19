// Solicita um número ao usuário e armazena na variável num
var num = prompt("Digite um número");

// Converte o valor de string para number
num = Number(num);

// Verifica se o número é positivo, negativo ou igual a zero usando uma estrutura de decisão if, else if e else
if (num > 0) {
  // Se o número for maior que zero, significa que ele é positivo
  // Exibe a mensagem "O número é positivo" no console
  console.log("O número é positivo");
} else if (num < 0) {
  // Se o número for menor que zero, significa que ele é negativo
  // Exibe a mensagem "O número é negativo" no console
  console.log("O número é negativo");
} else {
  // Se o número for igual a zero, exibe a mensagem "O número é zero" no console
  console.log("O número é zero");
}