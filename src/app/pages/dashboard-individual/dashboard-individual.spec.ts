import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndividual } from './dashboard-individual';

describe('DashboardIndividual', () => {
  let component: DashboardIndividual;
  let fixture: ComponentFixture<DashboardIndividual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardIndividual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIndividual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
