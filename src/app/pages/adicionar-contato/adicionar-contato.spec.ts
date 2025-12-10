import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarContato } from './adicionar-contato';

describe('AdicionarContato', () => {
  let component: AdicionarContato;
  let fixture: ComponentFixture<AdicionarContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
