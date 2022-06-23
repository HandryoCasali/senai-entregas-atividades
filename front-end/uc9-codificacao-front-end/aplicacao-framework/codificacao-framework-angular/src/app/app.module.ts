import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { BannerComponent } from './views/banner/banner.component';
import { ServiceComponent } from './views/service/service.component';
import { LancamentosComponent } from './views/lancamentos/lancamentos.component';
import { DestaquesComponent } from './views/destaques/destaques.component';
import { MonteSeuPcComponent } from './views/monte-seu-pc/monte-seu-pc.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { HomeOfficeComponent } from './views/home-office/home-office.component';
import { PcGamerComponent } from './views/pc-gamer/pc-gamer.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';
import { SmartphonesComponent } from './views/smartphones/smartphones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ServiceComponent,
    LancamentosComponent,
    DestaquesComponent,
    MonteSeuPcComponent,
    CarrinhoComponent,
    HomeOfficeComponent,
    PcGamerComponent,
    PerifericosComponent,
    SmartphonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
