import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ILEDAnimation } from 'src/app/models/ILEDAnimation';
import { LEDIntencityWaveAnimator } from 'src/app/models/LEDIntencityWaveAnimator';
import { LEDStrobeAnimator } from 'src/app/models/LEDStrobeAnimator';

@Component({
  selector: 'app-animation-controls',
  templateUrl: './animation-controls.component.html',
  styleUrls: ['./animation-controls.component.less']
})
export class AnimationControlsComponent implements OnInit {

  @Input() animators: ILEDAnimation[];
  @Output() animatorsChange = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
  }

  public checkInstance(animator: ILEDAnimation, objectName): boolean {
    
    switch (objectName) {
      case 'LEDStrobAnimator':
        return animator instanceof LEDStrobeAnimator;
      case 'LEDIntencityWaveAnimator':
        return animator instanceof LEDIntencityWaveAnimator;
      default:
        return false;
    }
    
  }
}
