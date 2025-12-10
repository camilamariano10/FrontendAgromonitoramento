import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';

// Interface para tipar os dados
export interface FazendaDetalhada {
  id?: number; // Bom ter um ID
  nomeFazenda: string;
  endereco: string;
  cidade: string;
  uf: string;
  cep: string;
  nomeResponsavel: string;
  cargoResponsavel: string;
  telefoneResponsavel: string;
  areaCultivada: string;
  safraAtual: string;
}

@Injectable({ providedIn: 'root' })
export class Service {
  //URL da API - descomentar quando conectar ao backend
  //private api = 'http://localhost:8081/farms/create';

  private fazendas: FazendaDetalhada[] = [
    {
      nomeFazenda: 'Fazenda Santa Rosa',
      endereco: 'Rodovia km 0', cidade: 'Cuiabá', uf: 'MT', cep: '78000-000',
      nomeResponsavel: 'João Silva', cargoResponsavel: 'Gerente',
      telefoneResponsavel: '(65) 99999-9999', areaCultivada: '1500', safraAtual: '2024/2025'
    },
    {
      nomeFazenda: 'Fazenda São João',
      endereco: 'Av. Principal', cidade: 'Sinop', uf: 'MT', cep: '78550-000',
      nomeResponsavel: 'Maria', cargoResponsavel: 'Agrônoma',
      telefoneResponsavel: '(66) 98888-8888', areaCultivada: '2000', safraAtual: '2024/2025'
    }
  ];

  constructor(private http: HttpClient) {}

  // 1. LISTAR (GET)
  listarFazendas(): Observable<FazendaDetalhada[]> {
    // Simulação: retorna a lista local
    return of(this.fazendas).pipe(delay(500));
    // Real: return this.http.get<FazendaDetalhada[]>(`${this.api}/list`);
  }

  // 2. CRIAR (POST)
  criarFazenda(dados: FazendaDetalhada): Observable<any> {
    this.fazendas.push(dados); // Adiciona na lista local simulada
    return of({ success: true, message: 'Criado', fazendaCriada: dados }).pipe(delay(1000));
  }

  // 3. EDITAR (PUT)
  editarFazenda(dados: FazendaDetalhada): Observable<any> {
    // Atualiza na lista local simulada
    const index = this.fazendas.findIndex(f => f.nomeFazenda === dados.nomeFazenda); // Usando nome como ID por enquanto
    if (index !== -1) this.fazendas[index] = dados;

    return of({ success: true, message: 'Editado', fazenda: dados }).pipe(delay(1000));
  }

  // 4. EXCLUIR (DELETE)
  excluirFazenda(nomeFazenda: string): Observable<any> {
    this.fazendas = this.fazendas.filter(f => f.nomeFazenda !== nomeFazenda);
    return of({ success: true, message: 'Excluído', nomeFazenda: nomeFazenda }).pipe(delay(1000));
  }
}
