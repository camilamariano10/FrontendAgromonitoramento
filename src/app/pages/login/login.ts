import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Service } from './service'; // <-- importa o service criado
import { Auth } from '../../core/auth';


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
    private router: Router, // Inject the Router
    private authService: Auth, private auth: Service
  ) {}

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
      this.dialogRef.close({
        status: 'loginSuccess',
        email: this.email,
        password: this.password
      });
    } catch (error) {
      // o alerta já é exibido no service
    } finally {
      this.loading = false;
    }
  }

  goToPlanos() {
    this.dialogRef.close();
    this.router.navigate(['/planos']); // Navega para a página do dashboard

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
    this.authService.login(); // Marca o usuário como logado
    // Isso fecha o modal e notifica o HeaderComponent para mudar a navbar
    this.dialogRef.close('loginSuccess');
  }

}
  // New function to close modal and navigate
  goToPlanos() {
    this.dialogRef.close();
    this.router.navigate(['/planos']); // Navega para a página do dashboard

  }
    */

