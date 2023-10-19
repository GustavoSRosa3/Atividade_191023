// Solicita uma nota ao usuário e armazena na variável nota
var nota = prompt("Digite uma nota");

// Converte o valor de string para number
nota = Number(nota);

// Verifica se a nota está dentro do intervalo de 0 a 10 usando uma estrutura de decisão if
if (nota >= 0 && nota <= 10) {
  // Se a nota estiver dentro do intervalo, exibe a mensagem "Nota válida" no console
  console.log("Nota válida");
} else {
  // Se a nota estiver fora do intervalo, exibe a mensagem "Nota inválida" no console
  console.log("Nota inválida");
}