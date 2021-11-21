import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  form = this.formBuilder.group({
    email:"",
    password:""

  }) 

  constructor( 
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router,
  ) { }

  authentication(email:string,password:string):any{
    this.http.post('http://127.0.0.1:5000/api/users/login',this.form.getRawValue())
  .subscribe((res:any)=>{console.log(res);
    
  console.log(res.accessToken);

    localStorage.setItem('accessToken',res.accessToken);
    this.router.navigate(['/dashboard'])});
  }
}
