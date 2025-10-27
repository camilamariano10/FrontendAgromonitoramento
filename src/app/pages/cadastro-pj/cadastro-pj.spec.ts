import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPj } from './cadastro-pj';

describe('CadastroPj', () => {
  let component: CadastroPj;
  let fixture: ComponentFixture<CadastroPj>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPj]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
