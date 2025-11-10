import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmHeader } from './farm-header';

describe('FarmHeader', () => {
  let component: FarmHeader;
  let fixture: ComponentFixture<FarmHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
