import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[colorRed]'
})
export class RedDirective {

  constructor (private elRef: ElementRef) {
    elRef.nativeElement.style.color = '#eb3d34'
  }

}
