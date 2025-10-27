import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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

    let success = false;

    // 1. Simule uma verificação básica de dados (opcional)
  if (this.email && this.password) {
      success = true; // Força o sucesso para testar a interface
  } else {
      alert("Preencha o e-mail e a senha para simular o login.");
  }

  // 2. Com a flag de sucesso, feche o modal
  if (success) {
    // Isso fecha o modal e notifica o HeaderComponent para mudar a navbar
    this.dialogRef.close('loginSuccess');
  }

}
  // New function to close modal and navigate
  goToPlanos() {
    this.dialogRef.close();
    this.router.navigate(['/planos']);

  }
    */
}
