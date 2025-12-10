import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // Para chamadas reais ao backend

// Interfaces para análises (centralizadas aqui para reutilização)
export type SeverityLevel = 'healthy' | 'low' | 'moderate' | 'high';
export type AnalysisStatus = 'Concluída' | 'Em Andamento' | 'Falhou';

export interface AnalysisItem {
  id: string;
  fileName: string;
  initials: string; // As letras no ícone (ex: 'FA', 'OK')
  iconClass: string; // Classe CSS para a cor do ícone (ex: 'initials-fa')
  date: string;
  plot: string; // "Talhão"
  confidence: number;
  diagnosis: string;
  severity: string; // O texto da tag (ex: 'Moderada')
  severityLevel: SeverityLevel; // O tipo para o estilo CSS (ex: 'moderate')
  status: AnalysisStatus;
}

@Injectable({
  providedIn: 'root'
})
export class Service {
  private baseUrl = 'http://localhost:8081'; // URL do seu backend

  constructor(private http: HttpClient) {} // Injeta HttpClient para chamadas reais

  // Método de login (seu código existente)
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

  // Método para análises (com mock ou real)
  getAnalyses(userType: 'business' | 'individual') {
    // Para backend real, descomente isso e ajuste:
    // return this.http.get<AnalysisItem[]>(`${this.baseUrl}/analises?type=${userType}`);

    // Mock para teste
    let mockData: AnalysisItem[] = [];

    if (userType === 'business') {
      mockData = [
        { id: '1', fileName: 'folha_soja_001.jpg', initials: 'FA', iconClass: 'initials-fa', date: '2024-01-15 às 14:30', plot: 'Talhão A', confidence: 94, diagnosis: 'Ferrugem Asiática', severity: 'Moderada', severityLevel: 'moderate', status: 'Concluída' },
        { id: '2', fileName: 'folha_soja_002.jpg', initials: 'OK', iconClass: 'initials-ok', date: '2024-01-14 às 09:15', plot: 'Talhão B', confidence: 98, diagnosis: 'Saudável', severity: 'Baixa', severityLevel: 'low', status: 'Concluída' },
        { id: '3', fileName: 'folha_soja_003.jpg', initials: 'OI', iconClass: 'initials-oi', date: '2024-01-13 às 16:45', plot: 'Talhão C', confidence: 85, diagnosis: 'Oídio', severity: 'Alta', severityLevel: 'high', status: 'Concluída' },
        { id: '4', fileName: 'folha_soja_004.jpg', initials: 'MS', iconClass: 'initials-ms', date: '2024-01-12 às 11:20', plot: 'Talhão D', confidence: 90, diagnosis: 'Mancha Parda', severity: 'Moderada', severityLevel: 'moderate', status: 'Concluída' },
        { id: '5', fileName: 'folha_soja_005.jpg', initials: 'OK', iconClass: 'initials-ok', date: '2024-01-11 às 08:50', plot: 'Talhão E', confidence: 99, diagnosis: 'Saudável', severity: 'Baixa', severityLevel: 'low', status: 'Concluída' },
        { id: '6', fileName: 'folha_soja_006.jpg', initials: 'FA', iconClass: 'initials-fa', date: '2024-01-10 às 15:10', plot: 'Talhão F', confidence: 92, diagnosis: 'Ferrugem Asiática', severity: 'Alta', severityLevel: 'high', status: 'Concluída' },
        { id: '7', fileName: 'folha_soja_007.jpg', initials: 'OI', iconClass: 'initials-oi', date: '2024-01-09 às 12:30', plot: 'Talhão G', confidence: 88, diagnosis: 'Oídio', severity: 'Moderada', severityLevel: 'moderate', status: 'Concluída' },
        { id: '8', fileName: 'folha_soja_008.jpg', initials: 'MS', iconClass: 'initials-ms', date: '2024-01-08 às 09:30', plot: 'Talhão H', confidence: 95, diagnosis: 'Mancha Parda', severity: 'Baixa', severityLevel: 'low', status: 'Concluída' },
      ];
    } else if (userType === 'individual') {
      mockData = [
        { id: '1', fileName: 'folha_soja_pf_001.jpg', initials: 'OK', iconClass: 'initials-ok', date: '2024-01-10 às 10:00', plot: 'Meu Talhão', confidence: 98, diagnosis: 'Saudável', severity: 'Baixa', severityLevel: 'low', status: 'Concluída' },
        { id: '2', fileName: 'folha_soja_pf_002.jpg', initials: 'FA', iconClass: 'initials-fa', date: '2024-01-09 às 14:45', plot: 'Talhão Principal', confidence: 85, diagnosis: 'Ferrugem Asiática', severity: 'Moderada', severityLevel: 'moderate', status: 'Concluída' },
        // Adicione mais itens mock para individual aqui, se necessário
      ];
    }

    return of(mockData).pipe(delay(500)); // Simula delay de API
  }
}
