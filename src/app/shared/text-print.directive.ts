import {Directive, ElementRef, HostListener, Input} from '@angular/core';



@Directive({
  selector: '[appTextPrint]'
})
export class TextPrintDirective {
 @Input() textToPrint: string = "";
  printInterval: number = 300;

  // currentIndex: number = 0;

  @HostListener('mouseenter', ['$event'])
  onMouseHover() {
    // this.textToPrint = 'hbd cejkr vckjewrh fkejwh grfu'

    this.printText(0);
  }
  constructor(private element: ElementRef) { }

  printText(index: number) {
    if (this.element && index < this.textToPrint.length) {
      this.element.nativeElement.textContent += this.textToPrint.charAt(index);
      index++;
      setTimeout(this.printText.bind(this,  index), this.printInterval);
    }
  }

}
