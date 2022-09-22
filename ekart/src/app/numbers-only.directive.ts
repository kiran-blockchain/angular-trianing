import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private ele:ElementRef) { }
  @Input()
  expression:any

  @HostListener('keydown',['$event'])
  onKeyup(evt:any){
   // console.log(evt);
    console.log(evt.key)
    let regex = new RegExp(this.expression);
   if(!regex.test(evt.key)){
      evt.preventDefault();
    }
    

  }

}
