// Import foi atualizado para incluir OnInit
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// --- Modelos de Dados (para esta página) ---

export interface AnalysisDetails {
  id: string;
  header: {
    fileName: string;
    date: string;
    plot: string;
    farm: string;
    location: string;
  };
  mainImage: {
    src: string; // Caminho para a imagem principal
    confidence: number;
  };
  imageInfo: {
    fileName: string;
    captureDate: string;
    location: string;
  };
  analysisResult: {
    diagnosis: string;
    confidenceText: string;
    severity: 'Moderada' | 'Leve' | 'Alta';
    severityLevel: 'moderate' | 'low' | 'high'; // Para a classe CSS
    iconClass: string; // ex: 'fa-triangle-exclamation'
    alertClass: string; // ex: 'alert-danger'
  };
  recommendations: string[];
  tipOfTheDay: string;
}

// --- Dados Mockados (Simulando o que viria de uma API) ---

const MOCK_DETAILS: AnalysisDetails = {
  id: '1',
  header: {
    fileName: 'folha_soja_001.jpg',
    date: '2025-11-02 às 19:30',
    plot: 'Talhão A',
    farm: 'Fazenda São João',
    location: 'Sinop - MT',
  },
  mainImage: {
    // ATENÇÃO: Troque este placeholder pelo caminho da sua imagem
    src: 'assets/doenca.jpg',
    confidence: 98,
  },
  imageInfo: {
    fileName: 'folha_soja_001.jpg',
    captureDate: '2025-11-02 às 19:30',
    location: 'Fazenda São João, Sinop - MT',
  },
  analysisResult: {
    diagnosis: 'Ferrugem Asiática',
    confidenceText: 'Doença detectada com alta confiança',
    severity: 'Moderada',
    severityLevel: 'moderate',
    iconClass: 'fa-triangle-exclamation',
    alertClass: 'alert-danger',
  },
  recommendations: [
    'Aplicar fungicida sistêmico (Triazol + Estrobilurina)',
    'Realizar aplicação preventiva a cada 15-20 dias',
    'Monitorar condições de umidade e temperatura',
    'Aumentar espaçamento entre plantas para melhor ventilação',
    'Realizar rotação de culturas na próxima safra',
  ],
  tipOfTheDay:
    'Para melhores resultados, fotografe as folhas com boa iluminação natural e foque nas áreas com sintomas visíveis.',
};

// --- Componente Angular ---

@Component({
  selector: 'app-detalhe-relatorio',
  standalone: false,
  templateUrl: './detalhe-relatorio.html',
  // CORRIGIDO: de 'styleUrl' para 'styleUrls' (plural e com colchetes)
  styleUrls: ['./detalhe-relatorio.css'],
})
export class DetalheRelatorio implements OnInit {
  // ADICIONADO: implements OnInit

  // Propriedade para armazenar os dados e expor ao HTML
  public details: AnalysisDetails | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Em um app real, os dados viriam de um serviço
    // Por enquanto, carregamos os dados mockados
    this.details = MOCK_DETAILS;
  }

  // --- NOVO MÉTODO PARA BAIXAR O PDF ---
  baixarRelatorio(): void {
    this.http
      .get('http://localhost:8081/relatorios/download', {
        responseType: 'blob',
      })
      .subscribe((file) => {
        const blob = new Blob([file], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'relatorio.pdf'; // sempre o único arquivo da pasta
        a.click();

        window.URL.revokeObjectURL(url);
      });
  }

  isImageOpen: boolean = false;

  openImage() {
    this.isImageOpen = true;
  }

  closeImage() {
    this.isImageOpen = false;
  }
}
