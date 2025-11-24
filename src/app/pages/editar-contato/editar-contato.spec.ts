import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContato } from './editar-contato';

describe('EditarContato', () => {
  let component: EditarContato;
  let fixture: ComponentFixture<EditarContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
