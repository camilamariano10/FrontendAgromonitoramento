import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarTelefones } from './gerenciar-telefones';

describe('GerenciarTelefones', () => {
  let component: GerenciarTelefones;
  let fixture: ComponentFixture<GerenciarTelefones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciarTelefones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarTelefones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
