import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './service';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { registerables } from 'chart.js';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Auth } from '../../core/auth';


Chart.register(...registerables);

// Interface para estruturar os dados (Melhor Prática)
interface DashboardData {
  nomeFazenda: string;
  ultimaAtualizacao: string;
  totalAnalises: number;
  ultimaAnalise: UltimaAnalise;
  planoAtual: PlanoAtual;
  distribuicao: Distribuicao;
}
// Exemplo de como sua interface DEVE ser definida no TypeScript
interface UltimaAnalise {
  data: string;
  talhao: string;
  corFundo: string;
  corTexto: string;
  status: string;
  resultado: string;
}

interface PlanoAtual {
  nome: string;
  validade: string;
  status: string;
}

interface ItemDistribuicao {
    nome: string;
    valor: number;
    percentual: string;
    cor: string;
}

interface Distribuicao {
    total: number;
    doencas: ItemDistribuicao[];
}

//Chart.register(ArcElement, Tooltip, Legend); // Registrar componentes do Chart.js

@Component({
  selector: 'app-dashboard-pj',
  standalone: true,
  imports: [CommonModule, FarmHeaderComponent, RouterLink],
  templateUrl: './dashboard-pj.html',
  styleUrl: './dashboard-pj.css',
})
export class DashboardPj implements OnInit, AfterViewInit {
  @ViewChild('diseaseChart') diseaseChart!: ElementRef<HTMLCanvasElement>; // Referência ao canvas do gráfico
  chart!: Chart; // Referência ao gráfico
  // Variável que irá armazenar os dados e será usada no HTML
  dashboardData!: any;
  loading: boolean = true;

  constructor(private service: Service, private router: Router, private cdr: ChangeDetectorRef) {} // 👈 Injete o Serviço

  goToGerenciarTelefones() {
    this.router.navigate(['/gerenciar-telefones']);
  }

  goToHistorico() {
    this.router.navigate(['/historico-relatorio']);
  }

    // Método chamado pelo template para atualizar o estado do dropdown
  dropOpen = false

    // ✅ Único método necessário: Atualizar os dados quando o header mudar a fazenda
  aoMudarFazenda(fazenda: any) { // Recebe o objeto completo da fazenda
    if (this.dashboardData) {
      // Atualiza o nome no dashboard e, idealmente, recarregaria os dados do gráfico para essa nova fazenda
      this.dashboardData = { ...this.dashboardData, nomeFazenda: fazenda.nomeFazenda };

      // Aqui você chamaria this.fetchDashboardData(fazenda.id) no futuro
      console.log('Carregando dados para:', fazenda.nomeFazenda);
    }
  }

  // Função para retornar a classe CSS baseada no status da última análise
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'baixo':
        return 'status-baixo';
      case 'moderado':
        return 'status-moderado';
      case 'alto':
        return 'status-alto';
      default:
        return '';
    }
  }

  // Função para retornar a classe CSS baseada no status do plano
  getStatusPlan(status: string): string {
    switch (status.toLowerCase()) {
      case 'ativo':
        return 'status-ativo';
      case 'inativo':
        return 'status-inativo';
      default:
        return '';
    }
  }

  ngOnInit(): void {
    this.loadDashboardData(); // 👈 Chama a função de busca ao iniciar
    }

  ngAfterViewInit(): void {
    if (this.dashboardData?.distribuicao?.doencas?.length > 0) {
      this.renderDiseaseChart(); // Render após view init
    }
    }

  private loadDashboardData() {
    this.loading = true;
    this.service.getData().subscribe({
      next: (data: DashboardData) => {
        this.dashboardData = data;
        this.loading = false;
        console.log('Dados recebidos:', this.dashboardData);

        this.cdr.detectChanges(); // Força update da view
        this.renderDiseaseChart(); // Tenta render após dados
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard:', err);
        this.loading = false;
      }
    });
  }


  fetchDashboardData() {
    this.loading = true;

    this.service.getData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;
        this.cdr.detectChanges(); // Força a detecção de mudanças
        console.log('Dados do dashboard recebidos:', this.dashboardData);

        // ✅ Verifica se existe a propriedade `distribuicao` antes de renderizar
        if (this.dashboardData?.distribuicao && this.diseaseChart) {
          setTimeout(() => this.renderDiseaseChart(), 0); // Pequeno delay para garantir que o DOM esteja atualizado
        } else {
          console.warn('⚠️ Dados de distribuição não encontrados:');
        }
      },
      error: (error) => {
        console.error('Erro ao buscar dados do dashboard:', error);
        this.loading = false;
        // Adicionar lógica de alerta para o usuário
      }
    });
  }

  chartData = {

  };


  renderDiseaseChart(): void {
    console.log('Tentando renderizar gráfico... Canvas disponível?', !!this.diseaseChart);

    if (!this.dashboardData || !this.diseaseChart || !this.dashboardData.distribuicao || !this.dashboardData.distribuicao.doencas || this.dashboardData.distribuicao.doencas.length === 0) {
      console.warn('Dados ou canvas não disponíveis.');
      return;
    }

    const ctx = this.diseaseChart.nativeElement;
    if (!ctx) {
      console.error('Canvas não encontrado.');
      return;
    }

    const doencas: ItemDistribuicao[] = this.dashboardData.distribuicao.doencas;
    const labels = doencas.map((d: ItemDistribuicao) => d.nome);
    const valores = doencas.map((d: ItemDistribuicao) => d.valor);
    const cores = doencas.map((d: ItemDistribuicao) => d.cor);

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{ data: valores, backgroundColor: cores, borderWidth: 1, hoverOffset: 12, borderRadius: 6 }],
      },
      options: {
        responsive: true,
        cutout: '70%',
        plugins: {
          legend: { position: 'bottom' },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.label || '';
                const value = context.parsed;
                const percent = doencas.find((d) => d.nome === label)?.percentual || '';
                return `${label}: ${value} (${percent})`;
              },
            },
          },
        },
      },
    });
  }


}

// 👉🏽 Estrutura de dados simulados (MOCK DATA)
const DADOS_DE_SIMULACAO = {};
