import { Component, OnInit } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  phone: string;
  role: string;
  status: 'Ativo' | 'Inativo';
  addedDate: string;
  lastUseDate: string;
}

@Component({
  selector: 'app-gerenciar-telefones',
  standalone: false,
  templateUrl: './gerenciar-telefones.html',
  styleUrls: ['./gerenciar-telefones.css'],
})
export class GerenciarTelefones implements OnInit {
  nomeFazenda = 'Fazenda Santa Rosa';
  ultimaAtualizacao = 'hoje às 14:30';

  // ----------- MODAL ADICIONAR -----------
  showAdicionarContato = false;

  // ----------- MODAL EDITAR -----------
  editarAberto = false;
  contatoSelecionado: Contact | null = null;

  // ----------- LISTA DE CONTATOS -----------
  contacts: Contact[] = [];

  constructor() {}

  ngOnInit() {
    this.contacts = [
      {
        id: 1,
        name: 'Ana Costa',
        phone: '+55 (11) 99888-1122',
        role: 'Assistente',
        status: 'Ativo',
        addedDate: '2025-01-10',
        lastUseDate: '2025-01-22 14:30',
      },
      {
        id: 2,
        name: 'Carlos Almeida',
        phone: '+55 (11) 97777-3322',
        role: 'Técnico Agrícola',
        status: 'Inativo',
        addedDate: '2025-01-05',
        lastUseDate: '2025-01-18 09:10',
      },
      {
        id: 3,
        name: 'Mariana Silva',
        phone: '+55 (11) 96555-4455',
        role: 'Gerente Agrícola',
        status: 'Ativo',
        addedDate: '2025-01-12',
        lastUseDate: '2025-01-22 08:40',
      },
      {
        id: 4,
        name: 'João Pereira',
        phone: '+55 (11) 91234-5566',
        role: 'Proprietário',
        status: 'Ativo',
        addedDate: '2025-01-02',
        lastUseDate: '2025-01-21 17:15',
      },
      {
        id: 5,
        name: 'Lucas Rocha',
        phone: '+55 (11) 93456-7788',
        role: 'Consultor de Campo',
        status: 'Inativo',
        addedDate: '2025-01-08',
        lastUseDate: '2025-01-14 11:50',
      },
    ];
  }

  // ===========================
  //      ADICIONAR CONTATO
  // ===========================
  adicionarTelefone() {
    this.showAdicionarContato = true;
  }

  fecharModalAdicionar() {
    this.showAdicionarContato = false;
  }

  salvarNovoContato(dados: any) {
    console.log('Contato recebido do modal:', dados);

    // adiciona na lista (mock)
    dados.id = this.contacts.length + 1;
    this.contacts.push(dados);

    this.showAdicionarContato = false;
  }

  // ===========================
  //        EDITAR CONTATO
  // ===========================
  abrirModalEditar(contato: Contact) {
    this.contatoSelecionado = { ...contato }; // evita mutação direta
    this.editarAberto = true;
  }

  fecharModalEditar() {
    this.editarAberto = false;
    this.contatoSelecionado = null;
  }

  salvarEdicao(dadosAtualizados: Contact) {
    console.log('Salvar contato editado:', dadosAtualizados);

    this.contacts = this.contacts.map(c =>
      c.id === dadosAtualizados.id ? dadosAtualizados : c
    );

    this.fecharModalEditar();
  }

  excluirContato(idContato: number) {
    console.log('Excluir contato com id:', idContato);

    this.contacts = this.contacts.filter(c => c.id !== idContato);

    this.fecharModalEditar();
  }
}

