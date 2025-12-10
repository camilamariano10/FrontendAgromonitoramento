import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_url = 'http://localhost:8081/user/register-business'; //É a url do back-end

@Injectable({
  providedIn: 'root'
})
export class Service {
  private http = inject(HttpClient); // Injeta o HttpClient

  registerBusiness(data: any): Observable<any> { // Método para registrar uma nova empresa
    return this.http.post<any>(API_url, data); // Faz uma requisição POST para o back-end
  }

}
