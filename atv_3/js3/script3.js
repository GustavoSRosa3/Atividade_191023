// Solicita um número ao usuário e armazena na variável limite
var limite = prompt("Digite um número");

// Converte o valor de string para number
limite = Number(limite);

// Cria uma variável contador que começa em 1
var contador = 1;

// Cria uma estrutura de repetição while que executa enquanto o contador for menor ou igual ao limite
while (contador <= limite) {
  // Verifica se o contador é par usando uma estrutura de decisão if
  if (contador % 2 == 0) {
    // Se o contador for par, exibe ele no console
    console.log(contador);
  }
  // Incrementa o contador em 1 a cada iteração do loop
  contador++;
}