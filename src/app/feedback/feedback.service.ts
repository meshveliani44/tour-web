import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {client} from "./client.model";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  sentUserInfo(userData: client): Observable<client> {
    return this.http.post<client>('http://localhost:5041/api/Orders', userData)
  }

  // getUserInfo() {
  //   return this.http.get('http://localhost:5041/api/Order');
  // }

}
