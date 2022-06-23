import { NotFoundComponent } from './views/not-found/not-found.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { MonteSeuPcComponent } from './views/monte-seu-pc/monte-seu-pc.component';
import { PcGamerComponent } from './views/pc-gamer/pc-gamer.component';
import { HomeOfficeComponent } from './views/home-office/home-office.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';
import { SmartphonesComponent } from './views/smartphones/smartphones.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'monte-seu-pc', component: MonteSeuPcComponent },
  { path:'home-office', component: HomeOfficeComponent },
  { path:'pc-gamer', component: PcGamerComponent },
  { path:'perifericos', component: PerifericosComponent },
  { path:'smartphones', component: SmartphonesComponent },
  { path:'carrinho', component: CarrinhoComponent },
  { path:'cadastrar', component: CadastrarComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
