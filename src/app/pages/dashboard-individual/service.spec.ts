import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Service } from './service';

// Dados que serão simulados pelo backend
const mockDashboardData = {
  nome: 'João da Silva',
  ultimaAtualizacao: '14:30',
  totalAnalises: 150,
  planoAtual: { nome: 'Pro', validade: '01/01/2026', status: 'Ativo' },
  distribuicao: { total: 127, doencas: [{ nome: 'Saudável', percentual: '35.4%' }] }
};

describe('Service', () => {
  let service: Service;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa o módulo de teste HTTP
      providers: [Service] // Fornece o serviço a ser testado
    });
    service = TestBed.inject(Service);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch dashboard data', () => {
    service.getData().subscribe(data => {
      expect(data).toEqual(mockDashboardData); // Verifica se os dados retornados são iguais aos mockados
    });
    // 2. Espera uma requisição GET no endpoint correto
    const req = httpTestingController.expectOne('http://localhost:8081/user/list');
    expect(req.request.method).toEqual('GET');

    // 3. Fornece a resposta mockada para o Observable
    req.flush(mockDashboardData);
  });

});
