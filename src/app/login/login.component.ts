import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  form = this.formBuilder.group({
    email:"",
    password:""

  }) 

  constructor(
    private http:HttpClient,
    private formBuilder:FormBuilder,
    private router:Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
submit():void{
  this.http.post('http://127.0.0.1:5000/api/users/login',this.form.getRawValue())
  .subscribe((res:any)=>{console.log(res);
    
  //console.log(res.accessToken);
     console.log(res)
     const a=JSON.stringify(res)
    localStorage.setItem('accessToken',res.accessToken);
    sessionStorage.setItem('user',a)
    //window.sessionStorage.setItem(res.accessToken,stringify(this.user))
    this.router.navigate(['/dashboard'])});
  
}


      
    }
