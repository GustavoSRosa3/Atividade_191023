// Solicita um número ao usuário e armazena na variável num
var num = prompt("Digite um número");

// Converte o valor de string para number
num = Number(num);

// Cria uma estrutura de repetição for que percorre os números de 1 a num
for (var i = 1; i <= num; i++) {
  // Verifica se o número é ímpar usando uma estrutura de decisão if
  if (i % 2 == 1) {
    // Se o número for ímpar, exibe ele no console
    console.log(i);
  }
}