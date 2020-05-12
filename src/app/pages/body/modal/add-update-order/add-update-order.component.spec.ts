import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateOrderComponent } from './add-update-order.component';

describe('AddEditOrderComponent', () => {
  let component: AddUpdateOrderComponent;
  let fixture: ComponentFixture<AddUpdateOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpdateOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
