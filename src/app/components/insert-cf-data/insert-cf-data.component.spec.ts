import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCfDataComponent } from './insert-cf-data.component';

describe('InsertCfDataComponent', () => {
  let component: InsertCfDataComponent;
  let fixture: ComponentFixture<InsertCfDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertCfDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCfDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
