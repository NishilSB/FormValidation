import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeMobInput]'
})
export class CustomeMobInputDirective {

  constructor(private el: ElementRef) {
   // el.nativeElement.style.backgroundColor = 'red';

   }

}
