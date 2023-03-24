import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borjomi',
  templateUrl: './borjomi.component.html',
  styleUrls: ['./borjomi.component.scss']
})
export class BorjomiComponent implements OnInit {



  ngOnInit(): void {
    // this.printNextCharacter()

  }


  textToPrint: string = "each  char text";
  printInterval: number = 100;

  currentIndex: number = 0;

   // printNextCharacter() {
   //  const outputElement: HTMLElement | null = document.getElementById("output");
   //  if (outputElement && this.currentIndex < this.textToPrint.length) {
   //    outputElement.innerText += this.textToPrint.charAt(this.currentIndex);
   //    this.currentIndex++;
   //    setTimeout(this.printNextCharacter, this.printInterval);
   //  }


// }


}
