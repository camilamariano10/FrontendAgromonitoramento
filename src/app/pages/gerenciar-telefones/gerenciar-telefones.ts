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
  dropdownOpen: boolean = false;

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
  }


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  setFiltroStatus(status: 'todos' | 'Ativo' | 'Inativo') {
    this.filtroStatus = status;
    this.filtroStatusLabel =
      status === 'todos' ? 'Todos os status' : status;
    this.dropdownOpen = false;
    this.aplicarFiltros();
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const inside = (event.target as HTMLElement).closest('.dropdown-status');
    if (!inside) this.dropdownOpen = false;
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

