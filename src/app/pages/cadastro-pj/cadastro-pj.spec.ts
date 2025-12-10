import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Importa o módulo de formulários reativos
import { Service } from './service'; // Importa o serviço utilizado no componente
import { of } from 'rxjs'; // Importa o operador 'of' do RxJS para criar observáveis simulados

import { CadastroPj } from './cadastro-pj';

describe('CadastroPj', () => {
  let component: CadastroPj;
  let fixture: ComponentFixture<CadastroPj>;
  let mockService: any;

  mockService = {
    registerBusiness: jasmine.createSpy('registerBusiness').and.returnValue(of({ success: true }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPj],
      imports: [ReactiveFormsModule], // Adiciona o módulo de formulários reativos
      providers: [
        { provide: Service, useValue: mockService } // Fornece o serviço simulado
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid form when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should call the service.registerusiness when submitting a valid form', () => {
    component.form.controls['nome'].setValue('Empresa Teste');
    component.form.controls['cnpj'].setValue('12.345.678/0001-90');
    component.form.controls['telefone'].setValue('123456789');
    component.form.controls['whatsapp'].setValue('987654321');
    component.form.controls['uf'].setValue('SP');
    component.form.controls['cidade'].setValue('São Paulo');
    component.form.controls['email'].setValue('empresa@gmail.com');
    component.form.controls['senha'].setValue('senha123');
    component.form.controls['confirmarSenha'].setValue('senha123');

    component.onSubmit();

    expect(mockService.registerBusiness).toHaveBeenCalledWith(component.form.value);
  });


});
