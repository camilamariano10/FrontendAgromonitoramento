import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth } from '../../core/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gerenciar-telefones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gerenciar-telefones.html',
  styleUrl: './gerenciar-telefones.css'
})
export class GerenciarTelefones implements OnInit {

  userType: 'individual' | 'business' | null = null;
  funcionarios: any[] = [];
  carregando = true;

  private apiUrl = 'http://localhost:8081'

  constructor(private auth: Auth, private http: HttpClient) { }

  ngOnInit() {
    this.definirTipoUsuario();
    this.carregarTelefones();
  }

  definirTipoUsuario() {
    // Por enquanto, simula tipo de usuário — depois pode vir do token ou perfil real
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsed = JSON.parse(userData);
      this.userType = parsed.tipo; // "individual" ou "business"
    } else {
      // Valor padrão para testes
      this.userType = 'business';
    }
  }

  carregarTelefones() {
    if (this.userType === 'business') {
      // Usuário empresarial => lista de funcionários (rotas /userEmployee)
      this.http.get(`${this.apiUrl}/userEmployee/farmId`).subscribe({
        next: (res: any) => {
          this.funcionarios = res;
          this.carregando = false;
        },
        error: () => this.carregando = false
      });
    } else if (this.userType === 'individual') {
      // Usuário individual => apenas o próprio telefone
      const userId = localStorage.getItem('userId') || '1';
      this.http.get(`${this.apiUrl}/userEmployee/${userId}`).subscribe({
        next: (res: any) => {
          this.funcionarios = [res]; // lista com um único item
          this.carregando = false;
        },
        error: () => this.carregando = false
      });
    }
  }

  adicionarTelefone() {
    // Simulação — depois liga com API /userEmployee/create
    console.log('Abrir modal para adicionar telefone');
  }

  editarTelefone(funcionario: any) {
    // Simulação — depois liga com API /userEmployee/update/{id}
    console.log('Editar telefone de', funcionario.nome);
  }

  removerTelefone(funcionarioId: number) {
    // Simulação — depois integra com DELETE (se existir)
    console.log('Remover funcionário com id', funcionarioId);
  }

}
