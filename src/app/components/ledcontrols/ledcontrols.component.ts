import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { LEDFixture } from 'src/app/models/LEDFixture';
import { debug } from 'util';

@Component({
  selector: 'app-ledcontrols',
  templateUrl: './ledcontrols.component.html',
  styleUrls: ['./ledcontrols.component.less']
})
export class LEDControlsComponent implements OnInit {
  
  @Input() fixture:LEDFixture;
  @Output() fixtureChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public colorChangeComplete(colorEvent) {
    
      this.fixture.color.r = colorEvent.color.rgb.r;
      this.fixture.color.g = colorEvent.color.rgb.g;
      this.fixture.color.b = colorEvent.color.rgb.b;
      this.fixture.color.a = colorEvent.color.rgb.a;
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event) {
    event.stopPropagation();
  }
}
