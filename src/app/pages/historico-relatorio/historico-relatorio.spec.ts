import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoRelatorio } from './historico-relatorio';

describe('HistoricoRelatorio', () => {
  let component: HistoricoRelatorio;
  let fixture: ComponentFixture<HistoricoRelatorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoricoRelatorio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoRelatorio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
