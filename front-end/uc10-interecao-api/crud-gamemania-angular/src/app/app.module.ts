import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { DestaquesComponent } from './components/destaques/destaques.component';
import { MonteSeuPcComponent } from './views/monte-seu-pc/monte-seu-pc.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { HomeOfficeComponent } from './views/home-office/home-office.component';
import { PcGamerComponent } from './views/pc-gamer/pc-gamer.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';
import { SmartphonesComponent } from './views/smartphones/smartphones.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './views/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ServicosComponent,
    LancamentosComponent,
    DestaquesComponent,
    MonteSeuPcComponent,
    CarrinhoComponent,
    HomeOfficeComponent,
    PcGamerComponent,
    PerifericosComponent,
    SmartphonesComponent,
    CadastrarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
