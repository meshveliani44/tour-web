import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursRoutingModule } from './tours-routing.module';
import {SharedModule} from "../shared/shared.module";

import {ToursComponent} from "./tours.component";
import {TbilisiComponent} from "./tbilisi/tbilisi.component";
import {KazbegiComponent} from "./kazbegi/kazbegi.component";
import {KakhetiComponent} from "./kakheti/kakheti.component";
import { BorjomiComponent } from './borjomi/borjomi.component';





@NgModule({
  declarations: [
    ToursComponent,
    TbilisiComponent,
    KazbegiComponent,
    KakhetiComponent,
    BorjomiComponent,
  ],
  imports: [
    CommonModule,
    ToursRoutingModule,
    SharedModule

  ]
})
export class ToursModule { }
