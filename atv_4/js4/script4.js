// Solicita um número ao usuário e armazena na variável num
var num = prompt("Digite um número");

// Converte o valor de string para number
num = Number(num);

// Cria uma variável multiplicador que começa em 1
var multiplicador = 1;

// Cria uma estrutura de repetição while que executa enquanto o multiplicador for menor ou igual a 10
while (multiplicador <= 10) {
  // Calcula o produto do número pelo multiplicador e armazena na variável resultado
  var resultado = num * multiplicador;
  
  // Exibe a expressão e o resultado no console usando concatenação de strings
  console.log(num + " x " + multiplicador + " = " + resultado);
  
  // Incrementa o multiplicador em 1 a cada iteração do loop
  multiplicador++;
}