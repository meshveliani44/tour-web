import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeedbackComponent} from "./feedback/feedback.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {AboutUsComponent} from "./about-us/about-us.component";

const routes: Routes = [
  {path: "", redirectTo: 'welcome', pathMatch: "full"},
  {path: "welcome", component: WelcomeComponent},
  {path: "about", component: AboutUsComponent},
  {path: 'feedback', component: FeedbackComponent},

  // {path: "tours", loadChildren: () => import('./tours/tours.module').then((m) => m.ToursModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
