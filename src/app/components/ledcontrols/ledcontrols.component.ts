import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LEDFixture } from 'src/app/models/LEDFixture';

@Component({
  selector: 'app-ledcontrols',
  templateUrl: './ledcontrols.component.html',
  styleUrls: ['./ledcontrols.component.less']
})
export class LEDControlsComponent implements OnInit {
  
  @Input() fixtures:LEDFixture[];
  @Output() fixturesChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
