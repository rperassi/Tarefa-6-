import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calcularMedia', component: CalcularMediaComponent },
  { path: 'cadastroAluno', component: CadastroAlunoComponent },
  { path: 'apoliceSeguro', component: ApoliceSeguroComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
