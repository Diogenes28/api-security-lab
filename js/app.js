// Procura o botão no HTML
const botao = document.getElementById("btnProdutos");

// Quando clicar no botão...
botao.addEventListener("click", buscarProdutos);

// Função responsável por consultar a API
async function buscarProdutos() {

    console.log("Iniciando consulta da API...");

    const resposta = await fetch("https://fakestoreapi.com/products");

    console.log(resposta);


}