import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perifericos',
  templateUrl: './perifericos.component.html',
  styleUrls: ['./perifericos.component.css']
})
export class PerifericosComponent implements OnInit {

  produtosPerifericos = [
    {
      imagem: '/assets/img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: '/assets/img/imagens-produtos/monitor.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: '/assets/img/imagens-produtos/teclado.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '399,99'
    },
    {
      imagem: '/assets/img/imagens-produtos/mouse.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/teclado.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/monitor.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
