// Solicita uma letra ao usuário e armazena na variável letra
var letra = prompt("Digite uma letra");

// Converte a letra para minúscula
letra = letra.toLowerCase();

// Verifica se a letra é uma vogal ou consoante usando uma estrutura de decisão if
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
  // Se a letra for uma vogal, exibe a mensagem "A letra é uma vogal" no console
  console.log("A letra é uma vogal");
} else {
  // Se a letra for uma consoante, exibe a mensagem "A letra é uma consoante" no console
  console.log("A letra é uma consoante");
}