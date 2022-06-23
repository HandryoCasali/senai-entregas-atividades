import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ViewChild('listaDropdown') listaDropdown:any

  usuarioLogin:any = {
    email: '',
    senha: ''
  }
  usuarioCadastro:any = {
    email: '',
    senha: ''
  }

  onSubmitLogin(form:any){
    console.log(this.usuarioLogin)
  }
  onSubmitCadastro(form:any){
    console.log(this.usuarioCadastro)
  }

  constructor() { }

  ngOnInit(): void {
  }

  dropdownMenu(tag:any){
    tag.classList.contains('dropdownMenu') ? tag.classList.remove('dropdownMenu') : tag.classList.add('dropdownMenu')
  }

}
