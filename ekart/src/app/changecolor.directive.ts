import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private ele:ElementRef) { 
  }
  @HostListener('mouseenter',['$event.target'])
  onMouseEnter(){
    this.ele.nativeElement.style.backgroundColor ='yellow';
  }
  @HostListener('mouseleave',['$event.target'])
  onMouseLeave(){
    this.ele.nativeElement.style.backgroundColor ='white';
  }
}
