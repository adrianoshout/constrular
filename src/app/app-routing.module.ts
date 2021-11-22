import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './telas/contato/contato.component';
import { HomeComponent } from './telas/home/home.component';
import { LoginComponent } from './telas/login/login.component';
import { PoliticadeprivacidadeComponent } from './telas/politicadeprivacidade/politicadeprivacidade.component';
import { ListarprodutosComponent } from './telas/produtos/listarprodutos/listarprodutos.component';
import { RecuperarsenhaComponent } from './telas/recuperarsenha/recuperarsenha.component';
import { TermosdeusoComponent } from './telas/termosdeuso/termosdeuso.component';

const routes: Routes = [
  { path: "termosdeuso", component: TermosdeusoComponent},
  { path: "politica", component: PoliticadeprivacidadeComponent},
  { path: "", component: LoginComponent},
  { path: "contato", component: ContatoComponent},
  { path: "recuperarsenha", component: RecuperarsenhaComponent},
  { path: "home", component: HomeComponent,
      children: [
        { path: "listarProdutos", component: ListarprodutosComponent},
      ]
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
