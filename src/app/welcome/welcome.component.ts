import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent   {
alhabet = ['ა','ბ','გ','დ','ე','ვ','ზ','თ','ი','ლ','მ','ნ','ო','პ','ჟ','რ','ს','ტ','უ','ფ','ქ','ღ','ყ','შ','ჩ','ც','ძ','წ','ჭ','ხ','ჯ','ჰ']

  constructor(private router: Router) { }



kakheti(){
    this.router.navigate(['tours/kakheti'])
}
kazbegi(){
    this.router.navigate(['tours/kazbegi'])
}
tbilisi(){
    this.router.navigate(['tours/tbilisi'])
}

borjomi(){
    this.router.navigate(['tours/borjomi'])
}

}
