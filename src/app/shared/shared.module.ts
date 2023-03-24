import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatStepperModule} from "@angular/material/stepper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";

import {MatNativeDateModule} from "@angular/material/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "../header/header.component";
import {AppRoutingModule} from "../app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {TextPrintDirective} from "./text-print.directive";


const declarations: any = [
  HeaderComponent,
  TextPrintDirective
];


const modules = [
  CommonModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule,
  MatToolbarModule,
  MatStepperModule,
  BrowserAnimationsModule,
  BrowserModule,
  MatNativeDateModule,
  NgbModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  HttpClientModule,
  MatCardModule,


];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...modules,
    AppRoutingModule
  ],
  exports: [
    ...modules,
    ...declarations
  ]
})
export class SharedModule {


}
