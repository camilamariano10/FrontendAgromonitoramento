import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Service } from './service';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { registerables } from 'chart.js';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header';
import { CommonModule } from '@angular/common';


Chart.register(...registerables);

// Interface para estruturar os dados (Melhor Prática)
interface DashboardData {
  nomeFazenda: string;
  ultimaAtualizacao: string;
  totalAnalises: number;
  ultimaAnalise: UltimaAnalise;
  analisesRestantes: AnalisesRestantes;
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

interface AnalisesRestantes {
  restantes: number;
  total: number;
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
  imports: [CommonModule, FarmHeaderComponent],
  templateUrl: './dashboard-pj.html',
  styleUrl: './dashboard-pj.css',
})
export class DashboardPj implements OnInit, AfterViewInit {
  @ViewChild('diseaseChart') diseaseChart!: ElementRef<HTMLCanvasElement>; // Referência ao canvas do gráfico
  chart!: Chart; // Referência ao gráfico
  // Variável que irá armazenar os dados e será usada no HTML
  dashboardData: any;
  loading: boolean = true;

  constructor(private service: Service) {} // 👈 Injete o Serviço

  // Método chamado pelo template para atualizar o estado do dropdown
 dropOpen = false

  fazendas: string[] = ['FAZENDA 1']; // inicial com uma fazenda
  contadorFazenda = 2; // para nomear automaticamente

  adicionarFazenda() {
    const novaFazenda = `FAZENDA ${this.contadorFazenda}`;
    this.fazendas.push(novaFazenda);
    this.contadorFazenda++;
  }

  selecionarFazenda(fazenda: string) {
    if (this.dashboardData) {
      // atualiza de forma imutável para respeitar melhores práticas de estado
      this.dashboardData = { ...this.dashboardData, nomeFazenda: fazenda };
    } else {
      // cria um objeto padrão caso ainda não exista dashboardData
      this.dashboardData = { ...DADOS_DE_SIMULACAO, nomeFazenda: fazenda } as DashboardData;
    }
    this.dropOpen = false; // fecha o menu ao selecionar
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

  ngAfterViewInit() {
    }

  private loadDashboardData() {
    this.loading = true;
    this.service.getData().subscribe({
      next: (data) => {
        this.dashboardData = data;
        this.loading = false;
        console.log('Dados do dashboard recebidos:', this.dashboardData);

        // Renderiza o gráfico após dados chegarem (canvas será exibido pelo *ngIf)
        setTimeout(() => this.renderDiseaseChart(), 50); // Pequeno delay para DOM atualizar
      },
      error: (error) => {
        console.error('Erro ao buscar dados do dashboard:', error);
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
        console.log('Dados do dashboard recebidos:', this.dashboardData);

        // ✅ Verifica se existe a propriedade `distribuicao` antes de renderizar
        if (this.dashboardData && this.dashboardData.distribuicao) {
          this.renderDiseaseChart();
        } else {
          console.warn('⚠️ Dados de distribuição não encontrados:', this.dashboardData);
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
    if (!this.dashboardData ||
      !this.diseaseChart ||
      !this.dashboardData.distribuicao ||
      !this.dashboardData.distribuicao.doencas) { // Verifica se os dados e a view estão prontos
      console.warn('Dados ou canvas não disponíveis para renderizar o gráfico.');
      return;
    }

    console.log('📊 Tentando renderizar o gráfico...');

    const ctx = this.diseaseChart.nativeElement;
    if (!ctx) {
      console.error('Canvas do gráfico não encontrado');
      return;
    }

    const doencas = this.dashboardData.distribuicao.doencas;

    if (doencas.length === 0) {
      console.warn('Nenhuma doença para renderizar no gráfico.');
      return;
    }

    const labels = doencas.map((d: any) => d.nome);
    const valores = doencas.map((d: any) => d.valor);
    const cores = doencas.map((d: any) => d.cor);

    console.log('🎨 Labels:', labels);
    console.log('📈 Valores:', valores);

    // ✅ destrói o gráfico anterior antes de recriar (evita sobreposição)
    if (this.chart) {
      this.chart.destroy();
    }


    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: valores,
          backgroundColor: cores,
          borderWidth: 1,
          hoverOffset: 12,
          borderRadius: 6, // deixa as pontas arredondadas
        }]
      },
      options: {
        responsive: true,
        cutout: '70%', // define o "buraco" do meio (moved to options to match Chart.js types)
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              generateLabels: (chart: any) => {
              const datasets = chart.data.datasets;
              return chart.data.labels.map((label: any, i: number) => ({
                text: label,
                fillStyle: datasets[0].backgroundColor[i]
              }));
            }
            }
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.label || '';
              const value = context.parsed;
              const percent = this.dashboardData.distribuicao.doencas.find(
                (d: any) => d.nome === label
              )?.percentual || '';
              return `${label}: ${value} (${percent})`;
              }
            }
          },
        } as any // para evitar erros de tipagem do Chart.js
      }
    });
  }


}


// 👉🏽 Estrutura de dados simulados (MOCK DATA)
const DADOS_DE_SIMULACAO = {};
