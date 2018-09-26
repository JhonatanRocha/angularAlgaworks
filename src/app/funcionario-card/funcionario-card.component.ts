import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
  // styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }

  getClassesCss() {
    return ['badge', 'badge-primary'];
  }

  getEstilosCartao() {
    return {
      borderWidth: this.funcionario.id + 'px',
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }
}
