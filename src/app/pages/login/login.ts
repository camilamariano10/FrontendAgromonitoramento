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
    private auth: Auth,
  ) {}

  // Função para alternar entre Entrar e Criar Conta
  selecionarOpcao(opcao: 'entrar' | 'criar') {
    this.opcaoSelecionada = opcao;
  }


  handleLogin(event: Event) {
    event.preventDefault(); // Evita que a página seja recarregada
    this.loading = true;
    try {
      const data = this.auth.login(this.email, this.password); // Usa o método simulado de login
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
    this.router.navigate(['/planos']); // Navega para a página do planos

  }
}
 
