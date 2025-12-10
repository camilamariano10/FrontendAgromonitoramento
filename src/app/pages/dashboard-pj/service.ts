import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay} from 'rxjs';

//👉🏽 ativar e ajustar quando conectar ao backend 👉🏽 const API_url = 'http://localhost:8081/user/farms/list'; //É a url do back-end
const DADOS_DE_SIMULACAO = {
  nomeFazenda: 'Fazenda Santa Maria',
  ultimaAtualizacao: '10:45',
  totalAnalises: 1,
  analisesRestantes: { restantes: 8, total: 10 },
  planoAtual: { nome: 'Pro', validade: '01/01/2026', status: 'Inativo' },
  ultimaAnalise: {
    data: '02/12/2025',
    talhao: 'Talhão B',
    corFundo: '#f2f2f2',
    corTexto: '#333333',
    status: 'Alto',
    resultado: 'Ferrugem Asiática'
  },
  distribuicao: {
    total: 30,
    doencas: [
      { nome: 'Saudável', valor: 0, percentual: '0%', cor: '#205c48' },
      { nome: 'Ferrugem', valor: 100, percentual: '100%', cor: '#ff9800' },
      { nome: 'Oídio', valor: 0, percentual: '0%', cor: '#3f51b5' },
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
