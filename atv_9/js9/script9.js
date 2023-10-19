// Solicita uma operação matemática ao usuário e armazena na variável operacao
var operacao = prompt("Digite uma operação matemática (+, -, *, /)");

// Solicita dois números ao usuário e armazena nas variáveis num1 e num2
var num1 = prompt("Digite o primeiro número");
var num2 = prompt("Digite o segundo número");

// Converte os valores de string para number
num1 = Number(num1);
num2 = Number(num2);

// Realiza a operação matemática correspondente usando uma estrutura de decisão switch
switch (operacao) {
  case "+":
    // Se a operação for soma, calcula o resultado e exibe no console
    var resultado = num1 + num2;
    console.log(resultado);
    break;
    
  case "-":
    // Se a operação for subtração, calcula o resultado e exibe no console
    var resultado = num1 - num2;
    console.log(resultado);
    break;
    
  case "*":
    // Se a operação for multiplicação, calcula o resultado e exibe no console
    var resultado = num1 * num2;
    console.log(resultado);
    break;
    
  case "/":
    // Se a operação for divisão, calcula o resultado e exibe no console
    var resultado = num1 / num2;
    console.log(resultado);
    break;
    
  default:
    // Se a operação não for reconhecida, exibe uma mensagem de erro no console
    console.log("Operação inválida");
}