import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToursModule} from "./tours/tours.module";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FeedbackComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToursModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
