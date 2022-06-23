import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  @ViewChild('modal') modal!: ElementRef;


  loginModel = new Login()

  mensagemErroBlackList = ''
  mensagemErroApi = ''

  onSubmit(){
    const listaPalavras: string[] = ['select ', 'from ', 'drop ', 'or ',
                                'having ', 'group ', 'by ', 'insert ',
                                'exec ', '\"', '\'', '--', '#', '*', ';']

    listaPalavras.forEach(palavra => {
      if(this.loginModel.email?.toLocaleLowerCase().includes(palavra)){
        this.mensagemErroBlackList = 'Dados inválidos, email não pode conter '+ palavra
        return;
      }
    })

    this.loginService.login(this.loginModel).subscribe(() => {
      this.modal.nativeElement.classList.remove('show')
      this.router.navigate(['/carrinho'])
    }, (error)=>{
      this.mensagemErroApi = error.error
      
      switch(this.mensagemErroApi) {
        case 'Password is too short':
          this.mensagemErroApi = 'Senha curta'
          break
        case 'Email format is invalid':
          this.mensagemErroApi = 'Email está com formato inválido'
          break
        case 'Email and password are required':
          this.mensagemErroApi = 'Email e Senha necessários'
          break
        default:
          this.mensagemErroApi = 'Email e/ou Senha inválido(s)'
          break
      }
    })
  }
}
