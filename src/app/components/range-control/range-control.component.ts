import { EventEmitter, Component, OnInit, Input, Output, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-range-control',
  templateUrl: './range-control.component.html',
  styleUrls: ['./range-control.component.less']
})
export class RangeControlComponent implements OnInit {

  private _mouseDown: boolean = false;

  @Input() value: number;
  @Output() valueChange = new EventEmitter();

  @Input() max: number;
  @Input() min: number;
  @Input() step: number;
  @Input() title: string;

  @HostListener('mousemove', ['$event']) onMouseMove(event) {
      if (this._mouseDown) {
          if(event.offsetX == 0) {
            this.value = this.min;
          } else {
            this.value = event.offsetX / this._element.nativeElement.clientWidth * (this.max - this.min);                   
            this.value = Math.round(this.value / this.step) * this.step + this.min;
            this.valueChange.emit(this.value);          
          }

      }
  }

  @HostListener('mouseout', ['$event']) onMouseOut(event) {
      var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this._element.nativeElement || e == this._element.nativeElement) {
           return;
        }
      
      this._mouseDown = false;
  }

  @HostListener('mouseup') onMouseUp() {
      this._mouseDown = false;
  }

  @HostListener('mousedown') onMouseDown() {
      this._mouseDown = true;
  }

  constructor(private _element:ElementRef) { }

  ngOnInit() {
  }

  public getControlValue(): string {
  
    return ((this.value - this.min) / (this.max - this.min) *  100) + '%';
  }
}
