import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AboutServiceService} from "./about-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  myForm!: FormGroup

  constructor(private http: HttpClient,
              private userService: AboutServiceService,
              private fb: FormBuilder
  ) {
  }


  ngOnInit(): void {
    this.getPosts()
    this.initedForm()

  }

  initedForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  get name() {
    return this.myForm.controls['name'].value
  }

  submitedData() {
    const name = this.myForm.controls['name'].value
    console.log(name)

    this.sentUserInput({
      name: this.name
    })
  }


  sentUserInput(data: any) {
    this.userService.sentUser(data).subscribe(resData => {
      console.log(resData)
    })
  }

  getPosts() {
    this.userService.getUsers().subscribe(response => {
      console.log(response)
    })
  }

  addDownTime(data: any) {
    this.userService.addDownTime(data).subscribe(res => {
      console.log(res)
    })
  }

  submit() {
    const sentData = {
      downType: 1,
      dateFrom: "2023-03-24T08:22:16.869Z",
      dateTo: "2023-03-24T08:22:16.869Z",
      channelType: 508,
      language: 1,
      resident: true,
      nonResident: true,
      pageSize: 0

    }
    this.addDownTime(sentData)
  }

  // deleteUser(){
  // this.userService.deleteUsert().subscribe(res =>{
  //   console.log(res)
  // })
  // }

  // userChangedData(data: any){
  // this.userService.change(data).subscribe(chngData =>{
  //   console.log(chngData)
  // })
  //
  // }


}
