alert("APP.JS CARREGADO");

const botao = document.getElementById("btnProdutos");

alert(botao);

botao.addEventListener("click", function(){

    fetch("https://api.exemplo.com/produtos")

});