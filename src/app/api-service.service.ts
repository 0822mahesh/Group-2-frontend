import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
getAPIData(){
  return this.http.get('http://127.0.01:5000/api/')
}
}
