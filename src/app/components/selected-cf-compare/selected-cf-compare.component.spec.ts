import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCfCompareComponent } from './selected-cf-compare.component';

describe('SelectedCfCompareComponent', () => {
  let component: SelectedCfCompareComponent;
  let fixture: ComponentFixture<SelectedCfCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCfCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCfCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
