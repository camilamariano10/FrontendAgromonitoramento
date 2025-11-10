import { Component, EventEmitter, HostListener, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Defina uma interface simples para os dados que o componente recebe (melhor prática)
interface FarmData {
  nomeFazenda: string;
  ultimaAtualizacao: string;
  // Adicione outras propriedades se necessário
}

@Component({
  selector: 'app-farm-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farm-header.html',
  styleUrl: './farm-header.css',
})
export class FarmHeaderComponent implements OnInit {
  // ✅ Recebe dados vindos do pai (DashboardPj)
  @Input() nomeFazenda!: string;
  @Input() ultimaAtualizacao!: string;
  @Input() fazendas: string[] = [];

  // ✅ Emite eventos para o componente pai
  @Output() selecionarFazenda = new EventEmitter<string>();
  @Output() adicionarFazendaEvent = new EventEmitter<void>();

  dropOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Inicialização, se necessário
  }

  // ✅ Abre/fecha o dropdown
  onToggle() {
    this.dropOpen = !this.dropOpen;
  }

  onSelect(fazenda: string) {
    this.selecionarFazenda.emit(fazenda);
    this.dropOpen = false;
  }

  // ✅ Fecha o dropdown ao clicar fora
  @HostListener('document:click', ['$event'])
  fecharDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dentro = target.closest('.farm-dropdown-container');
    if (!dentro) this.dropOpen = false;
  }

  // ✅ Emite evento ao selecionar uma fazenda
  //selecionarFazenda(fazenda: string) {
    //this.fazendaSelecionada.emit(fazenda);
    //this.dropOpen = false;
  //}

  // ✅ Emite evento ao adicionar fazenda
  onAdd() {
    this.adicionarFazendaEvent.emit();
  }
}
