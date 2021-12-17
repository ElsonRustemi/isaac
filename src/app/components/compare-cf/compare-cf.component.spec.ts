import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCFComponent } from './compare-cf.component';

describe('CompareCFComponent', () => {
  let component: CompareCFComponent;
  let fixture: ComponentFixture<CompareCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
