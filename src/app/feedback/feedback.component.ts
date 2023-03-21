import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {FeedbackService} from "./feedback.service";
import {client} from "./client.model";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  private iterableNumbers!: Subscription
  isLinear = false;
  firstFormGroup!: FormGroup
  secondFormGroup!: FormGroup
  thirdFormGrup!: FormGroup
  forthFormGroup!: FormGroup

  Client!: client

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private feedbackService: FeedbackService
  ) {
  }

  inidetForms() {
    this.firstFormGroup = this.fb.group({
      FirstName: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      LastName: ['', Validators.required],
    });
    this.thirdFormGrup = this.fb.group({
      Date: ['', Validators.required,],
    });
    this.forthFormGroup = this.fb.group({
      Comment: ['', Validators.required],
    });
  }


  get FirstName(): string {
    return this.firstFormGroup.controls['FirstName'].value
  }

  get LastName(): string {
    return this.secondFormGroup.controls['LastName'].value
  }

  get Date(): any {
    return this.thirdFormGrup.controls['Date'].value
  }

  get Comment(): any {
    return this.forthFormGroup.controls['Comment'].value
  }


  submitedData() {
    if (
      this.firstFormGroup.controls['FirstName'].value &&
      this.secondFormGroup.controls['LastName'].value &&
      this.thirdFormGrup.controls['Date'].value &&
      this.forthFormGroup.controls['Comment'].value

    ) {
      this.sendData({
        FirstName: this.FirstName,
        LastName: this.LastName,
        Date: this.Date,
        Comment: this.Comment,
      })
    }
  }

  ngOnInit() {
    this.inidetForms()
    // this.getInfo()
  }

  // getInfo() {
  //   this.feedbackService.getUserInfo().subscribe(data => {
  //     console.log(data)
  //   })
  // }


  sendData(sentData: any) {
    this.feedbackService.sentUserInfo(sentData)
      .subscribe(recievedData => {
        console.log(recievedData)
      })
  }

}
