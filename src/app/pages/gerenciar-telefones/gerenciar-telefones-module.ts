import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GerenciarTelefonesRoutingModule } from './gerenciar-telefones-routing-module';
import { GerenciarTelefones } from './gerenciar-telefones';
import { AdicionarContato } from '../adicionar-contato/adicionar-contato';
import { EditarContato } from '../editar-contato/editar-contato';

@NgModule({
  declarations: [
    GerenciarTelefones,
    AdicionarContato,
    EditarContato
  ],
  imports: [
    CommonModule,
    GerenciarTelefonesRoutingModule,
    HttpClientModule,
  ],
    exports: [
    AdicionarContato,
    EditarContato
  ]
})
export class GerenciarTelefonesModule {}
