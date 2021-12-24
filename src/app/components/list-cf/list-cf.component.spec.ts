import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCFComponent } from './list-cf.component';

describe('ListCFComponent', () => {
  let component: ListCFComponent;
  let fixture: ComponentFixture<ListCFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
