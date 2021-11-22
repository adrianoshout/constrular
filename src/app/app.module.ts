import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './telas/login/login.component';
import { TermosdeusoComponent } from './telas/termosdeuso/termosdeuso.component';
import { PoliticadeprivacidadeComponent } from './telas/politicadeprivacidade/politicadeprivacidade.component';
import { HomeComponent } from './telas/home/home.component';
import { ContatoComponent } from './telas/contato/contato.component';
import { RecuperarsenhaComponent } from './telas/recuperarsenha/recuperarsenha.component';
import { RodapeComponent } from './telas/rodape/rodape.component';
import { NavComponent } from './telas/nav/nav.component';
import { ListarprodutosComponent } from './telas/produtos/listarprodutos/listarprodutos.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TermosdeusoComponent,
    PoliticadeprivacidadeComponent,
    HomeComponent,
    ContatoComponent,
    RecuperarsenhaComponent,
    RodapeComponent,
    NavComponent,
    ListarprodutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
