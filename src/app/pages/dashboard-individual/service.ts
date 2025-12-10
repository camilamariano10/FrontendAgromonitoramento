import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay} from 'rxjs';


//👉🏽 ativar e ajustar quando conectar ao backend 👉🏽 const API_url = 'http://localhost:8081/user/list'; //É a url do back-end
const DADOS_DE_SIMULACAO = {
  nome: 'João da Silva',
  ultimaAtualizacao: '10:45',
  totalAnalises: 42,
  planoAtual: { nome: 'Individual', validade: '01/01/2026', status: 'Ativo' },
  ultimaAnalise: {
    data: '01/11/2025',
    talhao: 'Talhão B',
    corFundo: '#f2f2f2',
    corTexto: '#333333',
    status: 'Alto',
    resultado: 'Ferrugem Asiática'
  },
  distribuicao: {
    total: 30,
    doencas: [
      { nome: 'Saudável', valor: 15, percentual: '50.0%', cor: '#205c48' },
      { nome: 'Ferrugem', valor: 10, percentual: '33.3%', cor: '#ff9800' },
      { nome: 'Oídio', valor: 5, percentual: '16.7%', cor: '#3f51b5' },
    ]
  }
};



@Injectable({
  providedIn: 'root'
})
export class Service {
  private http = inject(HttpClient); // Injeta o HttpClient

  getData(): Observable<any> { // Método para buscar dados do dashboard
    // Ativar quando for usar o backend REAL 👉🏽 return this.http.get<any>(API_url); // Faz uma requisição GET para o back-end
    // 2. 👇🏽 ATIVE ESTE BLOCO PARA SIMULAR O BACKEND
    // O 'of()' cria um Observable que emite os DADOS_DE_SIMULACAO
    // O 'delay(500)' simula o tempo de espera da rede (opcional)
    return of(DADOS_DE_SIMULACAO).pipe(delay(500));
  }

}
