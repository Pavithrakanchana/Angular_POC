import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAtmCardNumber]',
  standalone: true
})
export class AtmCardNumberDirective {

  constructor(private el: ElementRef) { }

       @HostListener('input', ['$event'])
       onInput(event: any) {
         const input = event.target as HTMLInputElement;
         let value = input.value.replace(/\D/g, ''); // Remove non-digits
         if (value.length > 0) {
           value = value.match(/.{1,4}/g)?.join('-') || '';
         }
         input.value = value;
       }

}
