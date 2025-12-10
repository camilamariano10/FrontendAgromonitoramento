import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'; // Importa o módulo de formulários reativos
import { Service } from './service'; // Importa o serviço utilizado no componente
import { of } from 'rxjs'; // Importa o operador 'of' do RxJS para criar observáveis simulados

import { CadastroPF } from './cadastro-pf';

describe('CadastroPF', () => {
  let component: CadastroPF;
  let fixture: ComponentFixture<CadastroPF>;
  let mockService: any;

  mockService = {
    registerIndividual: jasmine.createSpy('registerIndividual').and.returnValue(of({ success: true }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPF],
      imports: [ReactiveFormsModule], // Adiciona o módulo de formulários reativos
      providers: [
        { provide: Service, useValue: mockService } // Fornece o serviço simulado
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid form when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should call the service.registerIndividual when submitting a valid form', () => {
    component.form.controls['nome'].setValue('Nome da pessoa');
    component.form.controls['cpf'].setValue('000.000.000-00');
    component.form.controls['telefone'].setValue('123456789');
    component.form.controls['whatsapp'].setValue('987654321');
    component.form.controls['uf'].setValue('SP');
    component.form.controls['cidade'].setValue('São Paulo');
    component.form.controls['email'].setValue('empresa@gmail.com');
    component.form.controls['senha'].setValue('senha123');
    component.form.controls['confirmarSenha'].setValue('senha123');

    component.onSubmit();

    expect(mockService.registerIndividual).toHaveBeenCalledWith(component.form.value);
  });

});
