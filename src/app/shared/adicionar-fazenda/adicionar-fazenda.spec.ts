import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarFazenda } from './adicionar-fazenda';

describe('AdicionarFazenda', () => {
  let component: AdicionarFazenda;
  let fixture: ComponentFixture<AdicionarFazenda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarFazenda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarFazenda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
