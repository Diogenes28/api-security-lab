alert("APP.JS CARREGADO");

const botao = document.getElementById("btnProdutos");

const resultado = document.getElementById("resultado");


botao.addEventListener("click", function(){

    fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(produtos => {

        console.log(produtos);

        resultado.innerHTML = JSON.stringify(produtos, null, 2);

    })

    .catch(error => {

        console.log("Erro ao consultar API:", error);

    });

});