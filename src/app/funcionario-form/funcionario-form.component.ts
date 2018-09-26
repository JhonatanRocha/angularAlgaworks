import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  ultimoId = 0;
  title = 'app';
  nome = 'Boston Celtics';
  idade = 5;
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();

  getIdade() {
    return this.idade;
  }

  adicionar() {
    this.adicionado = true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };
    
    this.funcionarioAdicionado.emit(funcionario);
  }
}
