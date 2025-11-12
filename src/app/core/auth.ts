import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class Auth {
  // BehaviorSubject é um tipo de Observable que armazena o valor mais recente e o compartilha.
  // Começa com 'false' (não logado)
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Exposto como Observable para que os componentes possam "assistir" a mudanças de estado
  isLoggedIn = this.loggedIn.asObservable();

  constructor(private router: Router) {
    // Verifique o estado inicial do usuário (por exemplo, se há um token no localStorage)
    const token = localStorage.getItem('authToken');
    this.loggedIn.next(!!token);
  }

  // 👇🏽 Método para simular o login
  login(email: string, password: string) {

    // Simula a lógica de sucesso do login, sem esperar resposta da API
    const tipo = email.includes('empresa') ? 'business' : 'individual';
    const userData = { email, tipo };

    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('authToken', 'fake-jwt-token');
    this.loggedIn.next(true); // Altera o estado para logado

    console.log('Usuário logado com sucesso! Tipo:', tipo);

    return { token: 'mock-token', user: email }; // Retorna dados simulados do usuário


   }

  // Método para simular o logout
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    this.loggedIn.next(false); // Altera o estado para deslogado
    this.router.navigate(['/']); // Redireciona para a página inicial
  }

}
