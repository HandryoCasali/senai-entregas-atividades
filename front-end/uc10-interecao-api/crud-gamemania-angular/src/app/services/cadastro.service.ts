import { Cadastro } from './../models/cadastro.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  create(cadastro: Cadastro): Observable<Cadastro>{

    return this.http.post<Cadastro>(this.url, cadastro)
  }
}
