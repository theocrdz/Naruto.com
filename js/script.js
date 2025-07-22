alert("Seja bem-vindo ao mundo ninja!");

function mostrarJutsu() {
  alert("jutsu bola de fogo!");
}

function mostrarOlhos() {
  alert("sharingan!");
}

function saudar() {
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem");
  mensagem.innerText = `Bem-vindo á Vila da Folha, ${nome}!`;
}
