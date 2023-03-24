import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  url: string = environment.appURL;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  sentUser(inputData: any): Observable<any>{
    return this.http.post('https://ng-test44-default-rtdb.firebaseio.com/posts.json', inputData)
  }

  addDownTime(downTimeData: any):Observable<any>{
    return this.http.post(`${this.url}api/v1/DownTime/GetDownTime`, downTimeData )
  }


}
