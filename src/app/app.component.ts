import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Tournament-app';

  constructor(private apiService: ApiServiceService, private router: Router) {}
  ngOnInit() {
    //this.apiService.getAPIData().subscribe((response)=>{
    //  console.log('responce is',response)
    // },(error)=>{
    //  console.log('error is',error)
    //})
  }
}
