import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  message: string = '';
  form = this.formBuilder.group({
    email: '',
    password: '',
  });
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    //getUser(email, password);
  }
}
