import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Service } from './service';

describe('Service', () => {
  let service: Service;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({// Configura o TestBed para testes
          imports: [HttpClientTestingModule], // Fornece o HttpClientTestingModule
          providers: [Service] // Fornece o serviço a ser testado});

  });
    service = TestBed.inject(Service);
    httpTestingController = TestBed.inject(HttpTestingController);
});

  afterEach(() => {
      httpTestingController.verify(); // Verifica se não há requisições pendentes
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send individual data and return success response', () => {
    const mockData = {
      nome: 'Nome da pessoa',
      cpf: '000.000.000-00',
      telefone: '123456789',
      whatsapp: '987654321',
      uf: 'SP',
      cidade: 'São Paulo',
      email: 'empresa@gmail.com',
      senha: 'senha123',
      confirmarSenha: 'senha123'
    };
    const mockResponse = { success: true, id: 1 }; // Resposta simulada do back-end

    service.registerIndividual(mockData).subscribe(response => {
      expect(response).toEqual(mockResponse); // Verifica se a resposta é igual à resposta simulada
    });
    const req = httpTestingController.expectOne('http://localhost:8081/user/register-individual'); // Verifica a URL da requisição
    expect(req.request.method).toEqual('POST'); // Verifica o método HTTP
    req.flush(mockResponse); // Envia a resposta simulada
  });
});
