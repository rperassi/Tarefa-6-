import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css'],
})
export class CadastroAlunoComponent implements OnInit {
  ra: number = 0;
  nome: string = '';
  email: string = '';
  celular: string = '';

  ngOnInit(): void {}
}
