import { Component, EventEmitter, HostListener, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarFazenda} from '../adicionar-fazenda/adicionar-fazenda';
import { Service, FazendaDetalhada } from '../adicionar-fazenda/service';
import { Auth } from '../../core/auth';

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

  fazendas: FazendaDetalhada[] = []; // Lista de fazendas para o dropdown


  // ✅ Emite eventos para o componente pai
  @Output() fazendaMudou = new EventEmitter<FazendaDetalhada>();

  dropOpen: boolean = false;
  isBusiness: boolean = false;

  constructor(private dialog: MatDialog, private service: Service, private auth: Auth) {}

  ngOnInit(): void {
    // Pega o tipo de usuário do Auth
    const userType = this.auth.getUserType();

    // Define se é business (mostra menu) ou individual (esconde menu)
    this.isBusiness = userType === 'business';

    // Para individual, força o título "Minha Propriedade" (se não passado pelo pai)
    if (!this.isBusiness && !this.nomeFazenda) {
      this.nomeFazenda = 'Minha Propriedade';
    }

    // Carrega fazendas só se for business
    if (this.isBusiness) {
      this.carregarFazendas();
    }
  }

  carregarFazendas() {
    this.service.listarFazendas().subscribe(lista => {
      this.fazendas = lista;
    });
  }

  // ✅ Abre/fecha o dropdown
  onToggle() {
    if (this.isBusiness) {
    this.dropOpen = !this.dropOpen;
    }
  }

  // Ao selecionar uma fazenda
  onSelect(fazenda: FazendaDetalhada) {
    this.dropOpen = false;
    this.fazendaMudou.emit(fazenda);
  }

  // ✅ Fecha o dropdown ao clicar fora
  @HostListener('document:click', ['$event'])
  fecharDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dentro = target.closest('.farm-dropdown-container');
    if (!dentro) this.dropOpen = false;
  }


  // ✅ Emite evento ao adicionar fazenda
  onAdd() {
    const dialogRef = this.dialog.open(AdicionarFazenda, {
      panelClass: 'custom-modal' // Para estilo personalizado
  });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.sucesso && result.fazendaCriada) {
        this.carregarFazendas(); // Recarrega a lista do serviço
        this.onSelect(result.fazendaCriada); // Seleciona a nova como atual
      }
      this.dropOpen = false;
    });
  }

  onEdit(fazenda: FazendaDetalhada) {
    this.dropOpen = false; // Fecha o menu

    const dialogRef = this.dialog.open(AdicionarFazenda, {
      panelClass: 'custom-modal',
      data: fazenda // Envia os dados reais para o modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;

      // 1. Recarrega a lista do serviço para garantir que o dropdown tenha os dados novos
      this.carregarFazendas();

      // Lógica de EXCLUSÃO
      if (result.acao === 'excluir') {
        // Se a fazenda excluída é a que está sendo mostrada no título
        if (this.nomeFazenda === result.nomeFazenda) {
            // Tenta selecionar a primeira da lista (se houver) ou reseta
            const novaLista = this.fazendas.filter(f => f.nomeFazenda !== result.nomeFazenda);
            if (novaLista.length > 0) {
              this.onSelect(novaLista[0]);
            } else {
              // Se não sobrou nenhuma, emite um objeto vazio ou trata conforme sua regra
            }
        }
      }

      // Lógica de EDIÇÃO
      if (result.acao === 'editar') {
        // Se a fazenda que você editou é a que está selecionada no cabeçalho, atualiza o título
        if (this.nomeFazenda === fazenda.nomeFazenda) {
          // 👇 CORREÇÃO: Usa result.fazenda (o objeto com os dados novos do formulário)
          this.onSelect(result.fazenda);
        }
      }
    });
  }






}
