const vitrine =  document.querySelector(".container");
let totalCarrinho = 0;
let itensCarrinho = 0;

function createProduct (){
    const criarProduto = document.createElement ("div");
    criarProduto.classList = "produto";
    criarProduto.id = "0";
    criarProduto.innerHTML =`<div  class="imgproduto">
    <img src="img/Dunk Low 2.png" class="img"
    alt="Tênis Nike Dunk Low SB WR" title="Tênis Nike Dunk Low SB WR" width="220px" height="220px"> 
</div>
<article>
   <section class="categoria">Dunk</section>
   <h2 class="h2produto">Dunk Low Sb Wb</h2>
   <h3 class="h3descproduto">Novo Nike Dunk Low SB red and white, garante à você uma pegada esportiva e streetwear.</h3>
   <h3 class="precoprodutos">R$ 899,99</h3>
   <button class="botaoadccarrinho" id="botaoProdutoUm">Adcionar ao carrinho</button>
</article>
</div>`;
vitrine.appendChild(criarProduto);
}

createProduct();

function createProductDois (){
  const criarProdutoDois = document.createElement("div");
  criarProdutoDois.classList = "produto";
  criarProdutoDois.id = "1";
  criarProdutoDois.innerHTML = `<div  class="imgproduto">
      <img src="img/Slide Victory Black.png" class="img"
      alt="Chinelo Nike Slide Victory Black" title="Chinelo Nike Slide Victory Black" width="160px" height="160px">
  </div>
  <article>
     <section class="categoria">Slide</section>
     <h2 class="h2produto">Slide Victory Black</h2>
     <h3 class="h3descproduto"> Novo Chinelo Slide Victory Balck, conforto e estilo
         em um só produto, garanta já.</h3>
     <h3 class="precoprodutos">R$ 149,99</h3>
     <button class="botaoadccarrinho" id="botaoProdutoDois">Adcionar ao carrinho</button>
  </article>
 </div>`;
 vitrine.appendChild(criarProdutoDois);
}
createProductDois();

function createProductTres (){
  const criarProdutoTres = document.createElement("div");
  criarProdutoTres.classList = "produto";
  criarProdutoTres.id = "2";
  criarProdutoTres.innerHTML = `<div  class="imgproduto">
      <img src="img/Air Jordan 1 Mid Lakers.png" class="img"
       alt="Tênis Nike Air Jordan 1 Mid Lakers"  title="Tênis Nike Air Jordan 1 Mid Lakers" width="220px" height="220px">
  </div>
  <article>
     <section class="categoria">Jordan</section>
     <h2 class="h2produto">Jordan 1 Mid Lakers</h2>
     <h3 class="h3descproduto">Novo Air Jordan 1 Mid x Lakers, para os amantes do basquete e streetwear.</h3>
     <h3 class="precoprodutos">R$ 899,99</h3>
     <button class="botaoadccarrinho" id="botaoProdutoTres">Adcionar ao carrinho</button>
  </article>
 </div>`;
 vitrine.appendChild(criarProdutoTres);
}
createProductTres();

function createProductQuatro(){
  const criarProdutoQuatro = document.createElement ("div");
  criarProdutoQuatro.classList = "produto";
  criarProdutoQuatro.id = "3";
  criarProdutoQuatro.innerHTML = `<div  class="imgproduto">
      <img src="img/Slide Victory Fem..png" class="img"
      alt="Chinelo Nike Slide Victory Feminino" title="Chinelo Nike Slide Victory Feminino" width="148px" height="155px">
  </div>
  <article>
     <section class="categoria">Slide</section>
     <h2 class="h2produto">Slide Victory Pink</h2>
     <h3  class="h3descproduto">Novo Chinelo Slide Victory Feminino, conforto e estilo
      em um só produto, garanta já.</h3>
     <h3 class="precoprodutos">R$ 149,99</h3>
     <button class="botaoadccarrinho" id="botaoProdutoQuatro">Adcionar ao carrinho</button>
  </article>
 </div>`;
 vitrine.appendChild(criarProdutoQuatro);
}
createProductQuatro();

function createProductCinco (){
  const criarProdutoCinco = document.createElement("div");
  criarProdutoCinco.classList = "produto";
  criarProdutoCinco.id = "4";
  criarProdutoCinco.innerHTML = `<div class="imgproduto">
      <img src="img/Air Jordan 1 Mid.png" class="img"
      alt="Tênis Nike Air Jordan 1 Mid GW" title="Tênis Nike Air Jordan 1 Mid GW" width="230px" height="230px">
  </div>
  <article>
     <section class="categoria">Jordan</section>
     <h2 class="h2produto">Jordan 1 Mid Wc</h2>
     <h3 class="h3descproduto">Novo Air Jordan 1 Mid white and grey, para fechar seu estilo off-white com muito conforto.</h3>
     <h3 class="precoprodutos">R$ 899,99</h3>
     <button class="botaoadccarrinho" id="botaoProdutoCinco">Adcionar ao carrinho</button>
  </article>
 </div>`;
  vitrine.appendChild(criarProdutoCinco);
}
createProductCinco();

function createProductSeis (){
  const criarProdutoSeis = document.createElement("div");
  criarProdutoSeis.classList = "produto";
  criarProdutoSeis.id = "5";
  criarProdutoSeis.innerHTML = `<div class="imgproduto">
      <img src="img/Dunk Low 1.png" class="img"
      alt="Tênis Nike Dunk SB Low BW" title="Tênis Nike Dunk SB Low BW" width="220px" height="220px">
  </div>
  <article>
     <section class="categoria">Dunk</section>
       <h2 class="h2produto">Dunk Low Sb Wb</h2>
       <h3  class="h3descproduto">Novo Nike Dunk Low SB Black and white, garante à você uma pegada esportiva e streetwear.</h3>
       <h3 class="precoprodutos">R$ 899,90</h3>
       <button class="botaoadccarrinho" id="botaoProdutoSeis">Adcionar ao carrinho</button>
  </article>
  </div>`;
  vitrine.appendChild(criarProdutoSeis);
}
createProductSeis();


const banco = [
  {
    id: "0",
    srcImg: "img/Dunk Low 2.png",
    altImg: "Tênis Nike Dunk Low SB WR",
    titleImg:"Tênis Nike Dunk Low SB WR",
    tituloProduto: "Dunk Low Sb Wb",
    precoProduto: 899.99,
    secao: "Dunk",
  },
  {
    id: "1",
    srcImg: "img/Slide Victory Black.png",
    altImg: "Chinelo Nike Slide Victory Black",
    titleImg:"Chinelo Nike Slide Victory Black",
    tituloProduto: "Slide Victory Black",
    precoProduto: 149.99,
    secao: "Slide",
  },
  {
    id: "2",
    srcImg: "img/Air Jordan 1 Mid Lakers.png",
    altImg: "Tênis Nike Air Jordan 1 Mid Lakers",
    titleImg:"Tênis Nike Air Jordan 1 Mid Lakers",
    tituloProduto: "Jordan 1 Mid Lakers",
    precoProduto: 899.99,
    secao: "Air Jordan",
  },
  {
    id: "3",
    srcImg: "img/Slide Victory Fem..png",
    altImg: "Chinelo Nike Slide Victory Feminino",
    titleImg:"Chinelo Nike Slide Victory Feminino",
    tituloProduto: "Slide Victory Pink",
    precoProduto: 149.99,
    secao: "Slide",
  },
  {
    id: "4",
    srcImg: "img/Air Jordan 1 Mid.png",
    altImg: "Tênis Nike Air Jordan 1 Mid GW",
    titleImg:"Tênis Nike Air Jordan 1 Mid GW",
    tituloProduto: "Jordan 1 Mid Wc",
    precoProduto: 899.99,
    secao: "Air Jordan",
    
  },
  {
    id: "5",
    srcImg: "img/Dunk Low 1.png",
    altImg: "Tênis Nike Dunk SB Low BW",
    titleImg:"Tênis Nike Dunk SB Low BW",
    tituloProduto: "Dunk Low Sb Wb",
    precoProduto: 899.99,
    secao: "Dunk",
  },
];


function captureClick (){
  let botoesAdcCart = document.getElementsByClassName("botaoadccarrinho");
  for (let i = 0; i < botoesAdcCart.length; i++){
  botoesAdcCart[i].addEventListener("click", ()=> addToCart(botoesAdcCart[i].parentNode.parentNode.id));
  }
};

captureClick();


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

 botaoremove = document.createElement ("button")
 botaoremove.classList.add("botaoremovecart")
 botaoremove.id = "botaoRemove1";
 botaoremove.innerText ="Remover Item";
 botaoremove.addEventListener('click', (evt)=> {removeToCart(evt)});

 criarProduto.appendChild(botaoremove)

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
  valorTotalProdutos.innerText = totalCarrinho;

  createProductCart(produtoClicado);
}


function removeToCart(evt){
  let button = evt.target;
  let product = button.parentElement;
  let idDoProdutoRemovido = product.id;
  console.log(idDoProdutoRemovido);
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

/*function createCalculadora (){
  const captureAside = document.getElementsByClassName("lateral");

  const criaCalcula = document.createElement ("div");
  criaCalcula.classList = "calculadoraCarr"
  criaCalcula.id = "calculadoraDisplay"

  criaCalcula.innerHTML = `
  <div class="quantidadeDeElementos">
    <h2>Quantidade: </h2>
    <h3>${itensCarrinho}</h3>
  </div>
    <div class="somaValorElementos">
      <h2>Total: </h2>
      <h3>${`R$` + totalCarrinho}</h3>
    </div>`;

captureAside.appendChild(criaCalcula);
 
}
createCalculadora();*/

