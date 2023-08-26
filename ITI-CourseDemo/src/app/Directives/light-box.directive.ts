import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

  @Input('LightBox') highlightColor:string = 'red';
  @Input() defaultColor:string = 'black';

  constructor(private element:ElementRef) { 
    this.element.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.element.nativeElement.style.border = `2px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout') onMouseOut() {
    this.element.nativeElement.style.border = `2px solid ${this.defaultColor}`; 
  }

}
