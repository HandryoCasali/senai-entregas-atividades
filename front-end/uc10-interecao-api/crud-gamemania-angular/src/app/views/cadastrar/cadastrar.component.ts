import { CadastroService } from './../../services/cadastro.service';
import { Cadastro } from './../../models/cadastro.models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastro: Cadastro = {
    email: '',
    password: ''
  }

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarConta(): void {
    this.cadastroService.create(this.cadastro).subscribe(() => {
      console.log(`Usuario ${this.cadastro.email} Cadastrado com sucesso!`)
    })
    this.router.navigate([''])
  }

}
