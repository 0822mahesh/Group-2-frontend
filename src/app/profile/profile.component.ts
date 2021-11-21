import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  currentUser:any
  currentUser1:any
  constructor(
    //private logindata:LoginComponent
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
    this.currentUser1 = this.getUser()
     this.currentUser = JSON.parse(this.currentUser1)
    console.log("this is test " + this.currentUser.firstName)
  }
  getUser(){
    return sessionStorage.getItem('user')
  }
  onDelete(){
    this.currentUser1 = this.getUser()
    this.currentUser = JSON.parse(this.currentUser1)
    //const header = {'Authorization':`Bearer ${localStorage.getItem('accessToken')}`}
    const value = "Bearer "+ localStorage.getItem('accessToken')
    const headers = new HttpHeaders({'Authorization': String(value)})
    
    //console.log(token)
    console.log("my neader is "+"Bearer "+ localStorage.getItem('accessToken'))
    this.http.delete(`http://127.0.0.1:5000/api/users/${this.currentUser._id}`,{ headers })
  .subscribe(()=>{console.log("item deleted")})

}}