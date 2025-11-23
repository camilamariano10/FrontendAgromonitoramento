import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, RouterLink } from '@angular/router';
import { Service } from './service';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { registerables } from 'chart.js';
import { ChangeDetectorRef } from '@angular/core';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header';


Chart.register(...registerables);

// Interface para estruturar os dados (Melhor Prática)
interface DashboardData {
  nome: string;
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


@Component({
  selector: 'app-dashboard-individual',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, FarmHeaderComponent],
  templateUrl: './dashboard-individual.html',
  styleUrl: './dashboard-individual.css'
})
export class DashboardIndividual implements OnInit {
  @ViewChild('diseaseChart') diseaseChart!: ElementRef<HTMLCanvasElement>; // Referência ao canvas do gráfico
  chart!: Chart; // Referência ao gráfico
  loading = false;

  // Dados simulados para PF
  dashboardData: any = { // Substituir 'any' por uma interface adequada quando disponível
    ultimaAtualizacao: 'Hoje, 10:00',
    totalAnalises: 15,
    ultimaAnalise: {
      resultado: 'Ferrugem Asiática',
      status: 'Alto',
      data: '20/11/2025'
    },
    planoAtual: {
      nome: 'Produtor Individual',
      validade: '01/01/2026'
    }


  };

  constructor(private service: Service, private router: Router, private cdr: ChangeDetectorRef) {} // 👈 Injete o Serviço


  goToHistorico() {
    this.router.navigate(['/historico-relatorio']);
  }

  ngOnInit(): void {
    // Aqui é para chamar o service futuramente
    this.loadDashboardData();
  }

  private loadDashboardData() {
    this.loading = true;
    this.service.getData().subscribe({
      next: (data: DashboardData) => {
        this.dashboardData = data;
        this.loading = false;
        console.log('Dados recebidos:', this.dashboardData);

        // Após dados, tenta render (ngAfterViewInit garante canvas)
        this.cdr.detectChanges(); // Força update da view se necessário
        this.renderDiseaseChart();
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

ngAfterViewInit() {
    // Agora o canvas está pronto
    if (this.dashboardData?.distribuicao?.doencas?.length > 0) {
      this.renderDiseaseChart(); // Chama render aqui para garantir canvas
    }
  }

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

    requestAnimationFrame(() => {
    const ctx = this.diseaseChart?.nativeElement;
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
        maintainAspectRatio: false,
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
  });// requestAnimationFrame
  }


  getStatusClass(status: string | undefined ): string { //O '| undefined' é para evitar erros caso o status seja undefined
    if (!status) {
      return ''; // Retorna string vazia se não houver status
    }
    switch (status?.toLowerCase()) {
      case 'baixo': return 'status-baixo';
      case 'moderado': return 'status-moderado';
      case 'alto': return 'status-alto';
      default: return '';
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


}
