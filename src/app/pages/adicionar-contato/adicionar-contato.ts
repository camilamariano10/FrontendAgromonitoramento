import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar-contato',
  standalone: false, // Mantém o padrão do seu projeto
  templateUrl: './adicionar-contato.html',
  styleUrls: ['./adicionar-contato.css']
})
export class AdicionarContato {

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  constructor() { }

  fecharModal() {
    this.close.emit();
  }

  salvarNovoTelefone() {
    this.save.emit(); 
    this.close.emit();
  }
}