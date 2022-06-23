import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-office',
  templateUrl: './home-office.component.html',
  styleUrls: ['./home-office.component.css']
})
export class HomeOfficeComponent implements OnInit {

  produtosHomeOffice = [
    {
      imagem: '/assets/img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '500,99'
    },
    {
      imagem: '/assets/img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '160,79'
    },
    {
      imagem: '/assets/img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '2399,99'
    },
    {
      imagem: '/assets/img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    },
    {
      imagem: '/assets/img/imagens-produtos/pc-gamer.jpg',
      descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      valor: '195,50'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
