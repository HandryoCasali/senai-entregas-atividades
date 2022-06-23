import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @ViewChild ("listaService", {static:false}) listaService!: ElementRef
  slideAtual:number = 0
  // services = this.listaService.nativeElement.children
  constructor() { }

  verificaSlideAtual(){
    // console.log(this.listaService.nativeElement.children)
    for(let i = 0; i < this.listaService.nativeElement.children.length ; i++){
        if(this.listaService.nativeElement.children[i].classList.contains('ativo')) {
            this.slideAtual = i
        }
    }
  }

  proximoSlide(){
    this.verificaSlideAtual()
    this.removeClass(this.listaService.nativeElement.children[this.slideAtual], 'ativo')
    this.slideAtual++
    if(this.slideAtual == this.listaService.nativeElement.children.length){
      this.slideAtual = 0
    }
    this.adicionaClass(this.listaService.nativeElement.children[this.slideAtual], 'ativo')
  }

 slideAnterior(){
    this.removeClass(this.listaService.nativeElement.children[this.slideAtual], 'ativo')
    this.slideAtual--
    if(this.slideAtual == -1){
        this.slideAtual = this.listaService.nativeElement.children.length-1
    }
    this.adicionaClass(this.listaService.nativeElement.children[this.slideAtual], 'ativo')
  }

  removeClass(tag:any, classe:any){
    tag.classList.remove(classe)
  }
  adicionaClass(tag:any, classe:any){
    tag.classList.add(classe)
  }

  // carrossel(){

  // }

  ngOnInit(): void {
  }


}
