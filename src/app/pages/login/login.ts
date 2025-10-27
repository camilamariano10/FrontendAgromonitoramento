import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Service } from './service'; // <-- importa o service criado

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

  constructor(private authService: Service) {} // <-- injeta o service no construtor
  
  // Função para alternar entre Entrar e Criar Conta
  selecionarOpcao(opcao: 'entrar' | 'criar') {
    this.opcaoSelecionada = opcao;
  }

  
    async handleLogin() {
    this.loading = true;
    try {
      const data = await this.authService.login(this.email, this.password);
      console.log('Login realizado:', data);
      // aqui você pode redirecionar ou salvar o token
    } catch (error) {
      // o alerta já é exibido no service
    } finally {
      this.loading = false;
    }
  }

  /*
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
    */
}
