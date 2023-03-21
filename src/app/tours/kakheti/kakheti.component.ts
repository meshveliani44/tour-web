import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kakheti',
  templateUrl: './kakheti.component.html',
  styleUrls: ['./kakheti.component.scss']
})
export class KakhetiComponent implements OnInit {

  KTVText: string = 'this text must emit on KTV image hover'
  bodbeText: string = 'this text must emit on bodbe image hover'
  ananuriText: string = 'this text must emit on ananuri image hover'

  constructor() { }

  ngOnInit(): void {
  }

}
