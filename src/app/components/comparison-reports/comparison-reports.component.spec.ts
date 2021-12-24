import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonReportsComponent } from './comparison-reports.component';

describe('ComparisonReportsComponent', () => {
  let component: ComparisonReportsComponent;
  let fixture: ComponentFixture<ComparisonReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparisonReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
