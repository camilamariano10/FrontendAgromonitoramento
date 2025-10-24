import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPj } from './dashboard-pj';

describe('DashboardPj', () => {
  let component: DashboardPj;
  let fixture: ComponentFixture<DashboardPj>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardPj]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
