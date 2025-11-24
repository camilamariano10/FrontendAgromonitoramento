import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-contato',
  standalone: false,
  templateUrl: './editar-contato.html',
  // CORREÇÃO: Mudei de styleUrl para styleUrls (plural e array)
  styleUrls: ['./editar-contato.css'] 
})
export class EditarContato implements OnInit {

  // Recebe os dados do contato que será editado (vindo do Pai)
  @Input() contactData: any = null;

  // Eventos de saída para avisar o Pai
  @Output() close = new EventEmitter<void>();   // Fechar modal
  @Output() save = new EventEmitter<any>();     // Salvar alterações
  @Output() delete = new EventEmitter<number>(); // Excluir contato

  // Variável para controlar o visual do Switch (Verde/Cinza)
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Ao abrir o modal, verifica se o contato é 'Ativo' para ligar o switch
    if (this.contactData) {
      this.isActive = this.contactData.status === 'Ativo';
    }
  }

  // Função chamada ao clicar no Switch
  toggleStatus() {
    this.isActive = !this.isActive;
  }

  fecharModal() {
    this.close.emit();
  }

  salvarEdicao() {
    // Monta o objeto com o novo status
    const dadosAtualizados = {
      ...this.contactData,
      status: this.isActive ? 'Ativo' : 'Inativo'
      // Aqui entrariam os valores dos inputs de nome/cargo/telefone se estivessem usando [(ngModel)]
    };

    this.save.emit(dadosAtualizados);
    this.fecharModal();
  }

  excluirContato() {
    // Confirmação simples antes de emitir a exclusão
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      this.delete.emit(this.contactData?.id);
      this.fecharModal();
    }
  }
}