import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MenuSComponent } from './menu-s/menu-s.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

@NgModule({
  declarations: [AppComponent, CalculadoraComponent, MenuSComponent, HomeComponent, ErrorComponent, CalcularMediaComponent, CadastroAlunoComponent, ApoliceSeguroComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
