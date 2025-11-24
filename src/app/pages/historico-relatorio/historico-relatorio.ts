import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HistoricoRelatorioService } from './historico-relatorio-service';

export type SeverityLevel = 'healthy' | 'low' | 'moderate' | 'high';
export type AnalysisStatus = 'Concluída' | 'Em Andamento' | 'Falhou';

export interface AnalysisItem {
  id: string;
  fileName: string;
  initials: string;
  iconClass: string;
  date: string;
  plot: string;
  confidence: number;
  diagnosis: string;
  severity: string;
  severityLevel: SeverityLevel;
  status: AnalysisStatus;
}

@Component({
  selector: 'app-historico-relatorio',
  standalone: false,
  templateUrl: './historico-relatorio.html',
  styleUrls: ['./historico-relatorio.css'],
})
export class HistoricoRelatorio implements OnInit {
  public totalResults: number = 0;
  public allAnalyses: AnalysisItem[] = [];
  public displayedAnalyses: AnalysisItem[] = [];

  constructor(
    private historicoService: HistoricoRelatorioService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadReportsFromApi();
  }

  loadReportsFromApi(): void {
    this.historicoService.getPdfList().subscribe({
      next: (pdfList: string[]) => {
        this.allAnalyses = pdfList.map((pdfName, index) => ({
          id: String(index + 1),
          fileName: pdfName,
          initials: 'FA',
          iconClass: 'initials-fa',
          date: '2024-01-15 às 14:30',
          plot: 'Talhão A',
          confidence: 94,
          diagnosis: 'Ferrugem Asiática',
          severity: 'Moderada',
          severityLevel: 'moderate',
          status: 'Concluída',
        }));

        this.displayedAnalyses = this.allAnalyses.slice(0, 5);
        this.totalResults = this.allAnalyses.length;

        console.log('PDFs carregados (dentro do subscribe):', this.allAnalyses);
        console.log('Forçando atualização da tela agora!');
        this.cdr.detectChanges(); // <--- A MÁGICA ACONTECE AQUI
      },

      error: (err) => {
        console.error('Erro ao carregar PDFs:', err);
      },
    });
  }
}
