import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

  produtosSmartphones = [
    {
      imagem: '/assets/img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/smartphone.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '800,50'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
