import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LEDControlsComponent } from './ledcontrols.component';

describe('LEDControlsComponent', () => {
  let component: LEDControlsComponent;
  let fixture: ComponentFixture<LEDControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LEDControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LEDControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
