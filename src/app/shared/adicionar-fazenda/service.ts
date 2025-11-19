import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {
  private api = 'http://localhost:8081/v3/api/farms';

  constructor(private http: HttpClient) {}

  criarFazenda(body: any): Observable<any> {
    return this.http.post(`${this.api}/create`, body);
  }

  listarFazendas(): Observable<any> {
    return this.http.get(`${this.api}/list`);
  }
}
