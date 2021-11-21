import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  imageSrc = 'assets/img/mlogo.png'
  imageAlt= "Pic"

  constructor(
    private router:Router,
    
    
  ) { }

  ngOnInit(): void {}
 
  
  getToken(){
    return localStorage.getItem("accessToken")
  }
  
  isLoggedIn() {
    //console.log(this.getToken());
   if (this.getToken()!==null) return true
    else return false
    
  }
  
  doLogout() {
    localStorage.removeItem('accessToken');
    sessionStorage.removeItem('user')
    this.router.navigate(['/login'])
  }
}
