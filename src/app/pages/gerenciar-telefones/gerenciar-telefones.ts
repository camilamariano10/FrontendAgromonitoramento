import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Service } from './service';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header'; // ✅ Usa o farm-header compartilhado
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-gerenciar-telefones',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FarmHeaderComponent],
  templateUrl: './gerenciar-telefones.html',
  styleUrls: ['./gerenciar-telefones.css']
})
export class GerenciarTelefones implements OnInit {
  nomeFazenda = 'Fazenda Santa Rosa';
  ultimaAtualizacao = 'hoje às 14:30';

  funcionarios: any[] = [];
  funcionariosFiltrados: any[] = [];

  busca: string = '';
  filtroStatus: 'todos' | 'Ativo' | 'Inativo' = 'todos';
  filtroStatusLabel: string = 'Todos os status';

  ordenarPorCampo: 'nome' | 'ultimoUso' | 'cargo' = 'nome';
  ordenarLabel: string = 'Nome';

  dropdownOpen: boolean = false;
  ordenarDropdownOpen: boolean = false;


  constructor(private service: Service) {}

  ngOnInit() {
    this.carregarFuncionarios();
  }

  carregarFuncionarios() {
    this.service.getFuncionarios().subscribe(data => {
      this.funcionarios = data.map(f => ({
        ...f,
        ultimoUso: this.gerarUltimoUsoAleatorio() // Simula "último uso"
      }));
      this.aplicarFiltros();
    });
  }

  aplicarFiltros() {
    const termo = this.busca.toLowerCase();

    this.funcionariosFiltrados = this.funcionarios.filter(func => {
      const nomeMatch =
        func.nome.toLowerCase().includes(termo) ||
        func.telefone.toLowerCase().includes(termo);

      const statusMatch =
        this.filtroStatus === 'todos' || func.status === this.filtroStatus;

      return nomeMatch && statusMatch;
    });
    this.aplicarOrdenacao(); // mantém a ordenação após filtro
  }

   // Aplica a ordenação
  aplicarOrdenacao() {
    this.funcionariosFiltrados.sort((a, b) => {
      if (this.ordenarPorCampo === 'nome') {
        return a.nome.localeCompare(b.nome);
      } else if (this.ordenarPorCampo === 'ultimoUso') {
        return new Date(b.ultimoUso || '').getTime() - new Date(a.ultimoUso || '').getTime();
      } else if (this.ordenarPorCampo === 'cargo') {
        return a.cargo.localeCompare(b.cargo);
      }
      return 0;
    });
  }

  toggleStatusDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
    this.ordenarDropdownOpen = false;
  }

  setFiltroStatus(status: 'todos' | 'Ativo' | 'Inativo') {
    this.filtroStatus = status;
    this.filtroStatusLabel =
      status === 'todos' ? 'Todos os status' : status;
    this.dropdownOpen = false;
    this.aplicarFiltros();
  }

  // Alterna o dropdown de ordenação
  toggleOrdenarDropdown() {
    this.ordenarDropdownOpen = !this.ordenarDropdownOpen;
    this.dropdownOpen = false;
  }

  // Define a ordenação
  ordenarPor(campo: 'nome' | 'ultimoUso' | 'cargo') {
    this.ordenarPorCampo = campo;
    this.ordenarLabel = campo === 'nome' ? 'Nome' :
                      campo === 'ultimoUso' ? 'Último uso' : 'Cargo';
    this.ordenarDropdownOpen = false;
    this.aplicarOrdenacao();
  }



  @HostListener('document:click', ['$event'])
  closeAllDropdowns(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.ordenar-dropdown') && !target.closest('.filtro-status')) {
      this.dropdownOpen = false;
      this.ordenarDropdownOpen = false;
    }
  }

  toggleStatus(func: any) {
    func.status = func.status === 'Ativo' ? 'Inativo' : 'Ativo';
    this.aplicarFiltros(); // atualiza visual
  }

  adicionarContato() {
    alert('Modal de adicionar contato será aberto aqui.');
  }

  editarContato(func: any) {
    alert(`Editar: ${func.nome}`);
  }

  excluirContato(func: any) {
    if (confirm(`Excluir ${func.nome}?`)) {
      this.funcionarios = this.funcionarios.filter(f => f !== func);
      this.aplicarFiltros();
    }
  }

  // Função auxiliar para simular "último uso"
  private gerarUltimoUsoAleatorio(): string {
    const dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
    const dia = dias[Math.floor(Math.random() * dias.length)];
    const hora = Math.floor(Math.random() * 24).toString().padStart(2, '0');
    const min = Math.floor(Math.random() * 60).toString().padStart(2, '0');
    return `Adicionado: 2024-01-${dia} ${hora}:${min}`;
  }
}

