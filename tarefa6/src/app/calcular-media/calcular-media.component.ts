import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css'],
})
export class CalcularMediaComponent implements OnInit {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  resultado: number = 0;
  situacao: string = '';

  ngOnInit(): void {}
  media() {
    this.resultado =
      this.ac1 * 0.15 + this.ac2 * 0.3 + this.ag * 0.1 + this.af * 0.45;
    if (this.resultado >= 5) this.situacao = 'Aprovado';
    else this.situacao = 'Reprovado';
  }
}
