import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPj } from './dashboard-pj';
import { Service } from './service';
import { of } from 'rxjs';

describe('DashboardPj', () => {
  let component: DashboardPj;
  let fixture: ComponentFixture<DashboardPj>;
  let mockService: any;

  // Dados mockados que o serviço irá retornar
  const mockData = {
    nomeFazenda: 'Fazenda Teste',
    totalAnalises: 100,
    ultimaAtualizacao: 'agora',
    analisesRestantes: { restantes: 5, total: 10 },
    planoAtual: { nome: 'Pro', validade: '01/01/2026', status: 'Ativo' },
    distribuicao: {}
  };

  beforeEach(async () => {
    // 1. Cria a simulação da chamada do service
    mockService = {
      getData: jasmine.createSpy('getData').and.returnValue(of(mockData))
    };


    await TestBed.configureTestingModule({
      declarations: [DashboardPj],
      providers: [{ provide: Service, useValue: mockService }]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(DashboardPj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch dashboard data on init', () => {
    expect(mockService.getData).toHaveBeenCalled();
    expect(component.dashboardData).toEqual(mockData);
  });

});
