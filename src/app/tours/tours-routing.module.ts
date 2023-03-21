import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TbilisiComponent} from "./tbilisi/tbilisi.component";
import {ToursComponent} from "./tours.component";
import {KakhetiComponent} from "./kakheti/kakheti.component";
import {KazbegiComponent} from "./kazbegi/kazbegi.component";
import {BorjomiComponent} from "./borjomi/borjomi.component";

const routes: Routes = [
  {path: "", redirectTo: 'tours', pathMatch: 'full'},
  {
    path: 'tours', component: ToursComponent,
    children: [
      {path: "tbilisi", component: TbilisiComponent},
      {path: 'kakheti', component: KakhetiComponent},
      {path: 'kazbegi', component: KazbegiComponent},
      {path: 'borjomi', component: BorjomiComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule { }
