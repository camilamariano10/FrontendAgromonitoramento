// O import foi atualizado para incluir OnInit
import { Component, OnInit } from '@angular/core';
import { Auth } from '../../core/auth'; // Importe o Auth
import { Service } from '../../shared/service';
import { AnalysisItem, SeverityLevel, AnalysisStatus } from '../../shared/models'; // Mantém o import – agora sem conflito

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
    severity: 'Baixa',
    severityLevel: 'low',
    status: 'Concluída',
  },
  // ... (adicione o resto dos mocks aqui, igual ao seu código original)
];

@Component({
  selector: 'app-historico-relatorio',
  standalone: false,
  templateUrl: './historico-relatorio.html',
  styleUrls: ['./historico-relatorio.css'],
})
export class HistoricoRelatorio implements OnInit {
  nomeFazenda = 'Fazenda Santa Rosa';
  ultimaAtualizacao = 'hoje às 14:30';

  // Propriedades que o HTML irá usar
  public totalResults: number = 0;
  public allAnalyses: AnalysisItem[] = [];
  public displayedAnalyses: AnalysisItem[] = []; // A lista da página atual

  userType: 'business' | 'individual' | null = null;

  constructor(private auth: Auth, private service: Service) {
    // Construtor idealmente fica limpo, usado para injeção de dependência
  }

  ngOnInit(): void {
    // Obtém o tipo de usuário do Auth
    const rawType = this.auth.getUserType();

    // Verifica e atribui apenas se for válido (type guard)
    if (rawType === 'business' || rawType === 'individual') {
      this.userType = rawType;
    } else {
      console.error('Tipo de usuário inválido ou não encontrado:', rawType);
      this.userType = null; // Fallback
    }

    // Ajusta o nomeFazenda baseado no tipo
    if (this.userType === 'individual') {
      this.nomeFazenda = 'Minha Propriedade';
    }

    this.carregarAnalises();

    /*Em um app real, os dados viriam de um serviço (ex: this.apiService.getAnalyses())
    Aqui, estamos carregando os dados mockados */
    //this.allAnalyses = MOCK_ANALYSES;
    //this.totalResults = this.allAnalyses.length; // Será 8 com os dados mockados

    /*Simula a paginação "Mostrar 5"
    O template HTML deve fazer o loop *ngFor em `displayedAnalyses` */
    //this.displayedAnalyses = this.allAnalyses.slice(0, 5); // Pega os primeiros 5
  }

  // Você pode adicionar métodos aqui para controlar a paginação no futuro,
  // por exemplo: goToPage(page: number) { ... }

  carregarAnalises() {
    if (!this.userType) {
      console.error('Tipo de usuário não encontrado');
      return;
    }

    this.service.getAnalyses(this.userType).subscribe(data => {
      this.allAnalyses = data;
      this.totalResults = this.allAnalyses.length;
      this.displayedAnalyses = this.allAnalyses.slice(0, 5); // Pega os primeiros 5
    });
  }

}
