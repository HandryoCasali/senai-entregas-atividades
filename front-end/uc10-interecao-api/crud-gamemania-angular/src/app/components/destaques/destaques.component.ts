import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.css']
})
export class DestaquesComponent implements OnInit {

  produtosDestaques = [
    {
      imagem: '/assets/img/imagens-produtos/cadeira.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: '/assets/img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: '/assets/img/imagens-produtos/notebook.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '2399,99'
    },
    {
      imagem: '/assets/img/imagens-produtos/teclado.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/notebook2.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
