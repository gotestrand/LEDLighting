import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeControlComponent } from './range-control.component';

describe('RangeControlComponent', () => {
  let component: RangeControlComponent;
  let fixture: ComponentFixture<RangeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
