import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css'], // corrigido de styleUrl para styleUrls
})
export class Login {
  // Estado atual do modal: qual opção está ativa
  opcaoSelecionada: 'entrar' | 'criar' = 'entrar'; // padrão Entrar
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<Login>,
    private router: Router // Inject the Router
  ) {}

  // Função para alternar entre Entrar e Criar Conta
  selecionarOpcao(opcao: 'entrar' | 'criar') {
    this.opcaoSelecionada = opcao;
  }

  async handleLogin() {
    try {
      this.loading = true;
      const response = await fetch('http://localhost:8081/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: this.email, password: this.password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erros[0].mensagem);
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      this.loading = false;
    }
  }
  // New function to close modal and navigate
  goToPlanos() {
    this.dialogRef.close();
    this.router.navigate(['/planos']);
  }
}
