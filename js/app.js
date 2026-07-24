alert("APP.JS CARREGADO");

const botao = document.getElementById("btnProdutos");

alert(botao);

botao.addEventListener("click", function(){

    fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(data => {

        console.log(data);

    })

    .catch(error => {

        console.log("Erro:", error);

    });

});