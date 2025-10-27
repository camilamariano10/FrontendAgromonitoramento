import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPF } from './cadastro-pf';

describe('CadastroPF', () => {
  let component: CadastroPF;
  let fixture: ComponentFixture<CadastroPF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
