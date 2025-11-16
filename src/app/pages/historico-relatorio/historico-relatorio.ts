// O import foi atualizado para incluir OnInit
import { Component, OnInit } from '@angular/core';

// --- Modelos de Dados (Definidos aqui para simplicidade) ---

export type SeverityLevel = 'healthy' | 'low' | 'moderate' | 'high';
export type AnalysisStatus = 'Concluída' | 'Em Andamento' | 'Falhou';

/**
 * Interface que define a estrutura de um item de análise
 */
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

// --- Dados Mockados (Simulando 8 resultados, como na imagem) ---

const MOCK_ANALYSES: AnalysisItem[] = [
  {
    id: '1',
    fileName: 'folha_soja_001.jpg',
    initials: 'FA',
    iconClass: 'initials-fa',
    date: '2024-01-15 às 14:30',
    plot: 'Talhão A',
    confidence: 94,
    diagnosis: 'Ferrugem Asiática',
    severity: 'Moderada',
    severityLevel: 'moderate',
    status: 'Concluída',
  },
  {
    id: '2',
    fileName: 'folha_soja_002.jpg',
    initials: 'OK',
    iconClass: 'initials-ok',
    date: '2024-01-14 às 09:15',
    plot: 'Talhão B',
    confidence: 98,
    diagnosis: 'Saudável',
    severity: 'Saudável',
    severityLevel: 'healthy',
    status: 'Concluída',
  },
  {
    id: '3',
    fileName: 'folha_soja_003.jpg',
    initials: 'MA',
    iconClass: 'initials-ma',
    date: '2024-01-13 às 16:45',
    plot: 'Talhão C',
    confidence: 89,
    diagnosis: 'Mancha Alvo',
    severity: 'Leve',
    severityLevel: 'low',
    status: 'Concluída',
  },
  {
    id: '4',
    fileName: 'folha_soja_004.jpg',
    initials: 'OI',
    iconClass: 'initials-oi',
    date: '2024-01-12 às 11:20',
    plot: 'Talhão A',
    confidence: 92,
    diagnosis: 'Oídio',
    severity: 'Moderada',
    severityLevel: 'moderate',
    status: 'Concluída',
  },
  {
    id: '5',
    fileName: 'folha_soja_005.jpg',
    initials: 'OK',
    iconClass: 'initials-ok',
    date: '2024-01-11 às 06:30',
    plot: 'Talhão D',
    confidence: 96,
    diagnosis: 'Saudável',
    severity: 'Saudável',
    severityLevel: 'healthy',
    status: 'Concluída',
  },
  // --- Itens duplicados para simular 8 resultados ---
  {
    id: '6',
    fileName: 'folha_soja_006.jpg',
    initials: 'MA',
    iconClass: 'initials-ma',
    date: '2024-01-10 às 15:00',
    plot: 'Talhão E',
    confidence: 88,
    diagnosis: 'Mancha Alvo',
    severity: 'Leve',
    severityLevel: 'low',
    status: 'Concluída',
  },
  {
    id: '7',
    fileName: 'folha_soja_007.jpg',
    initials: 'FA',
    iconClass: 'initials-fa',
    date: '2024-01-09 às 11:10',
    plot: 'Talhão A',
    confidence: 91,
    diagnosis: 'Ferrugem Asiática',
    severity: 'Moderada',
    severityLevel: 'moderate',
    status: 'Concluída',
  },
  {
    id: '8',
    fileName: 'folha_soja_008.jpg',
    initials: 'OI',
    iconClass: 'initials-oi',
    date: '2024-01-08 às 09:30',
    plot: 'Talhão F',
    confidence: 93,
    diagnosis: 'Oídio',
    severity: 'Moderada',
    severityLevel: 'moderate',
    status: 'Concluída',
  },
];

// --- Componente Angular ---

@Component({
  selector: 'app-historico-relatorio',
  standalone: false,
  templateUrl: './historico-relatorio.html',
  styleUrls: ['./historico-relatorio.css'],
})
export class HistoricoRelatorio implements OnInit {
  // Implementa OnInit

  // Propriedades que o HTML irá usar
  public totalResults: number = 0;
  public allAnalyses: AnalysisItem[] = [];
  public displayedAnalyses: AnalysisItem[] = []; // A lista da página atual

  constructor() {
    // Construtor idealmente fica limpo, usado para injeção de dependência
  }

  ngOnInit(): void {
    // Em um app real, os dados viriam de um serviço (ex: this.apiService.getAnalyses())
    // Aqui, estamos carregando os dados mockados
    this.allAnalyses = MOCK_ANALYSES;
    this.totalResults = this.allAnalyses.length; // Será 8

    // Simula a paginação "Mostrar 5"
    // O template HTML deve fazer o loop *ngFor em `displayedAnalyses`
    this.displayedAnalyses = this.allAnalyses.slice(0, 5); // Pega os primeiros 5
  }

  // Você pode adicionar métodos aqui para controlar a paginação no futuro,
  // por exemplo: goToPage(page: number) { ... }
}
