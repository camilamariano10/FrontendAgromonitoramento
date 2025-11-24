import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRelatorio } from './detalhe-relatorio';

describe('DetalheRelatorio', () => {
  let component: DetalheRelatorio;
  let fixture: ComponentFixture<DetalheRelatorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheRelatorio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheRelatorio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
