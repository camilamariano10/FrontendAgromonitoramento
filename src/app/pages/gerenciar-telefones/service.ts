import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {
  getFuncionarios() {
    const mock = [
      { nome: 'Ana Costa', telefone: '+55 (11) 66688-6666', cargo: 'Assistente', status: 'Inativo' },
      { nome: 'Carlos Oliveira', telefone: '+55 (11) 77777-7777', cargo: 'Técnico Agrícola', status: 'Ativo' },
      { nome: 'João Silva', telefone: '+55 (11) 99999-9999', cargo: 'Proprietário', status: 'Ativo' },
      { nome: 'Maria Santos', telefone: '+55 (11) 88888-8888', cargo: 'Gerente Agrícola', status: 'Ativo' }
    ];
    return of(mock).pipe(delay(500));
  }
}
