import { TestBed } from '@angular/core/testing';

import { HistoricoRelatorioService } from './historico-relatorio-service';

describe('HistoricoRelatorioService', () => {
  let service: HistoricoRelatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoRelatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
