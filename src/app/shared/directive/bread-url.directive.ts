import { Directive,Input } from '@angular/core';

@Directive({
  selector: '[bread-url]'
})
export class BreadUrlDirective {

  @Input('bread-url') url:string;

  constructor() { }

}
