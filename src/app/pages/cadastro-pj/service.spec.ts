import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Service } from './service';

describe('Service', () => {
  let service: Service; // Instância do serviço a ser testado
  let httpTestingController: HttpTestingController; // Controlador para testar requisições HTTP

  beforeEach(() => {
    TestBed.configureTestingModule({ // Configura o TestBed para testes
      imports: [HttpClientTestingModule], // Fornece o HttpClientTestingModule
      providers: [Service] // Fornece o serviço a ser testado
    });
    service = TestBed.inject(Service);
    httpTestingController = TestBed.inject(HttpTestingController); // Injeta o HttpTestingController
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica se não há requisições pendentes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send business data and return success response', () => {
    const mockData = {
      nome: 'Empresa Teste',
      cnpj: '12.345.678/0001-90',
      telefone: '123456789',
      whatsapp: '987654321',
      uf: 'SP',
      cidade: 'São Paulo',
      email: 'empresa@gmail.com',
      senha: 'senha123',
      confirmarSenha: 'senha123'
    };
    const mockResponse = { success: true, id: 1 }; // Resposta simulada do back-end

    service.registerBusiness(mockData).subscribe(response => {
      expect(response).toEqual(mockResponse); // Verifica se a resposta é igual à resposta simulada
    });
    const req = httpTestingController.expectOne('http://localhost:8081/user/register-business'); // Verifica a URL da requisição
    expect(req.request.method).toEqual('POST'); // Verifica o método HTTP
    req.flush(mockResponse); // Envia a resposta simulada
  });

});
