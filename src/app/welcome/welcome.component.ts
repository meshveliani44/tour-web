import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

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
