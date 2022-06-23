// Lorem ipsum dolor sit amet consectetur adipisicing elit.
/* <li class="item-produto col-xl-3 col-lg-4 col-sm-6">
            <a href="#" class="card-produto">
              <img src="img/imagem-item.png" class="imagem-produto">
              <div class="conteudo-produto">
                <p class="descricao-produto">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p class="preco-produto">R$ 999,99</p>
              </div>
            </a>
          </li> */

$(document).ready(function () {

  const produtosLancamentos = [
    {
      imagem: 'img/imagens-produtos/notebook2.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: 'img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: 'img/imagens-produtos/notebook.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '2399,99'
    },
    {
      imagem: 'img/imagens-produtos/teclado.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]
  const produtosDestaques = [
    {
      imagem: 'img/imagens-produtos/cadeira.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: 'img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: 'img/imagens-produtos/notebook.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '2399,99'
    },
    {
      imagem: 'img/imagens-produtos/teclado.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: 'img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: 'img/imagens-produtos/notebook2.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]
  const produtosPCGamer = [
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '2399,99'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]
  const produtosHomeOffice = [
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '2399,99'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '../img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]
  const produtosPerifericos = [
    {
      imagem: '../img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: '../img/imagens-produtos/monitor.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: '../img/imagens-produtos/teclado.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '399,99'
    },
    {
      imagem: '../img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '../img/imagens-produtos/teclado.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '../img/imagens-produtos/monitor.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]
  const produtosSmartphones = [
    {
      imagem: '../img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '../img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '../img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '../img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '../img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '../img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    }

  ]

  // ta carregando todas chamadas da função no ready do documento.
  
  renderizarProduto(produtosLancamentos, "#lista-lancamentos")
  renderizarProduto(produtosDestaques, "#lista-destaques")
  renderizarProduto(produtosPCGamer, "#lista-pc-gamer")
  renderizarProduto(produtosHomeOffice ,'#lista-home-office')
  renderizarProduto(produtosPerifericos ,'#lista-perifericos')
  renderizarProduto(produtosSmartphones ,'#lista-smartphones')

  function renderizarProduto(produtos, seletor){
  let template = '';
  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i]
    template += `<li class="item-produto col-xl-3 col-lg-4 col-sm-6">
        <a href="#" class="card-produto">
          <img src="${produto.imagem}" class="imagem-produto">
          <div class="conteudo-produto">
            <p class="descricao-produto">${produto.descricao}</p>
            <p class="preco-produto">R$ ${produto.valor}</p>
          </div>
        </a>
      </li>
      `
  }
  $(seletor).html(template)
  console.log('ok')
  } 
});
