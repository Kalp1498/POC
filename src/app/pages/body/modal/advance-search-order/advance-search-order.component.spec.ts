import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceSearchOrderComponent } from './advance-search-order.component';

describe('AdvanceSearchOrderComponent', () => {
  let component: AdvanceSearchOrderComponent;
  let fixture: ComponentFixture<AdvanceSearchOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceSearchOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceSearchOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
