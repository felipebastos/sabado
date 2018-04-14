window.onload = function(){
    var seu_nome = prompt('Oi, eu sou o navegador, qual o seu nome?');
    var nome = document.getElementById('nome');
    nome.innerHTML = seu_nome;
};
