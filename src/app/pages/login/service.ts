import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service {
  
  private baseUrl = 'http://localhost:8081';

  constructor() {}

  async login(email: string, password: string) {
    try {
      const response = await fetch(`${this.baseUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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
      throw error;
    }
  }
}
