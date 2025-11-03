import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  // BehaviorSubject é um tipo de Observable que armazena o valor mais recente e o compartilha.
  // Começa com 'false' (não logado)
  private loggedIn = new BehaviorSubject<boolean>(false);

  // Exposto como Observable para que os componentes possam "assistir" a mudanças de estado
  isLoggedIn = this.loggedIn.asObservable();

  constructor() {
    // Verifique o estado inicial do usuário (por exemplo, se há um token no localStorage)
    const token = localStorage.getItem('authToken');
    this.loggedIn.next(!!token);
  }

  // Método para simular o login
  login(email: string, password: string) {
    // Simule o armazenamento de um token após o sucesso do login
    localStorage.setItem('authToken', 'fake-jwt-token');
    this.loggedIn.next(true); // Altera o estado para logado
  }

  // Método para simular o logout
  logout() {
    localStorage.removeItem('authToken');
    this.loggedIn.next(false); // Altera o estado para deslogado
  }

}
