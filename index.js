const vitrine =  document.querySelector(".container");
let botoesAdcCart = document.getElementsByClassName("botaoadccarrinho");
const input = document.querySelector(".campoDeBusca");
const button = document.querySelector(".forinput");
let totalCarrinho = 0;
let itensCarrinho = 0;

function criarProduto (listaProdutos){
      vitrine.innerHTML = "";

      listaProdutos.forEach((produto) => {
          const div = document.createElement("div");
          const divImg = document.createElement('div');
          const img = document.createElement("img");
          const article = document.createElement("article");
          const section = document.createElement("section");
          const h2Nome = document.createElement("h2");
          const h3Descri = document.createElement("h3");
          const h3Preco = document.createElement("h3");
          const button = document.createElement("button");


          div.classList.add("produto");
          div.id = produto.id
          divImg.classList.add("imgproduto");
          img.src = produto.srcImg;
          img.alt = produto.altImg;
          img.title = produto.titleImg;
          img.classList.add("img");
          img.id = produto.id;
          section.classList.add("categoria");
          section.innerText = produto.secao;
          h2Nome.classList.add("h2produto");
          h2Nome.innerText = produto.tituloProduto;
          h3Descri.classList.add("h3descproduto");
          h3Descri.innerText = produto.descProduto;
          h3Preco.classList.add("precoprodutos");
          h3Preco.innerText = produto.precoProduto;
          button.classList.add("botaoadccarrinho");
          button.id = produto.id;
          button.innerText = "Adcionar ao carrinho";

          divImg.appendChild(img);
          div.appendChild(divImg);
          article.appendChild(section);
          article.appendChild(h2Nome);
          article.appendChild(h3Descri);
          article.appendChild(h3Preco);
          article.appendChild(button);
          div.appendChild(article);
          vitrine.appendChild(div);

          if(img.id === "1" || img.id === "3"){
            img.classList.add("imgSlide")
          }
      });

      for (let i = 0; i < botoesAdcCart.length; i++){
        botoesAdcCart[i].addEventListener("click", ()=> addToCart(botoesAdcCart[i].id));
        }
}

function createProductCart (produtoClicado){
  const pegarCart = document.getElementById("carrinho");

  const criarProduto = document.createElement ("div");
  const calculadoraPegar = document.getElementsByClassName("calculadoraCarr");
  
  criarProduto.classList = "produtoNoCarrinho";
  criarProduto.id = produtoClicado.id;
  criarProduto.innerHTML =`
  <img src="${produtoClicado.srcImg}" class="imgDentroCart">
<div class="colunaCarrinho">
 <h2 class="h2produtoCart">${produtoClicado.tituloProduto}</h2>

 <h3 class="precoprodutosCart">${`R$ ` + produtoClicado.precoProduto}</h3>
 </div>`;

 imgRemove = document.createElement ("img");
 imgRemove.setAttribute("src", "img/cesto-de-lixo.png");
 imgRemove.classList.add("botaoremovecart");
 imgRemove.id = "botaoRemove1";
 imgRemove.addEventListener('click', (evt)=> {removeToCart(evt)});

 criarProduto.appendChild(imgRemove)

 pegarCart.appendChild(criarProduto);
 

 if(pegarCart.children.length > 1){
   pegarCart.children[0].classList.add("conteudoCarrinhoVazio");
   calculadoraPegar[0].id="";
 } 
}

function addToCart (id){
  let produtoClicado = {};
  for (let i = 0; i < banco.length; i++){
    if(banco[i].id === id){
      produtoClicado = banco[i];
    }
  }

  itensCarrinho += 1;
  totalCarrinho += produtoClicado.precoProduto;
  
  let quantidadeTotal = document.querySelector(".quantidadeTotal")
  quantidadeTotal.innerText = itensCarrinho;
  
  let valorTotalProdutos = document.querySelector(".valorTotalProdutos");
  valorTotalProdutos.innerText = totalCarrinho.toFixed(2);

  createProductCart(produtoClicado);
}


function removeToCart(evt){
  let img = evt.target;
  let product = img.parentElement;
  let idDoProdutoRemovido = product.id;
  product.remove()
  const calculadoraPegar = document.getElementsByClassName("calculadoraCarr");
  const pegarCart = document.getElementById("carrinho");

  if(pegarCart.children.length == 1){
    pegarCart.children[0].classList.remove("conteudoCarrinhoVazio");
    calculadoraPegar[0].id = "esconder";

 } 

 let qtdItensPosRemover = document.querySelector (".quantidadeTotal");
 qtdItensPosRemover.innerHTML = itensCarrinho -= 1;

 let valorTotalRemoveCart = document.querySelector(".valorTotalProdutos");
 valorTotalRemoveCart.innerHTML = totalCarrinho -= banco[idDoProdutoRemovido].precoProduto;
}

function mostrarTodos(){

  const listaTodosProdutos = banco.filter((produto)=>{
    return produto.secao;
  });

  criarProduto(listaTodosProdutos);
}
mostrarTodos();

 const botaoTodos = document.getElementById("filtros0");
 botaoTodos.addEventListener("click", ()=> {mostrarTodos()})

function mostrarDunk(secao){
    const listaDunk = banco.filter ((produto)=>{
      return produto.secao === secao;
    });

    criarProduto(listaDunk);
}

 const botaoDunk = document.getElementById("filtros1");
 botaoDunk.addEventListener("click", ()=> {mostrarDunk("Dunk")});

 function mostrarJordan(secao){
   const listaJordan = banco.filter ((produto)=>{
     return produto.secao === secao;
   });

   criarProduto(listaJordan);
}

const botaoJordan = document.getElementById("filtros2");
botaoJordan.addEventListener("click", ()=> {mostrarJordan("Air Jordan")});

function mostrarSlide(secao){
 const listaSlide = banco.filter ((produto)=>{
   return produto.secao === secao;
 });

 criarProduto(listaSlide);
}

const botaoSlide = document.getElementById("filtros3");
botaoSlide.addEventListener("click", ()=> {mostrarSlide("Slide")});

function filtrarInputNome (event){
  event.preventDefault();
  const value = input.value;

  const listaPorNome = banco.filter ((objeto)=>
  objeto.tituloProduto.toLocaleLowerCase() === value.toLocaleLowerCase() || objeto.secao.toLocaleLowerCase() === value.toLocaleLowerCase()
  );

    criarProduto(listaPorNome);
    return listaPorNome;
}

button.addEventListener("click", filtrarInputNome);





