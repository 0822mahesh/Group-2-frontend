import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { error } from 'console';
import { ShareReplayConfig } from 'rxjs/internal/operators/shareReplay';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  user: any;
  form = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  message: String = '';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private LoginService: LoginService
  ) {}

  ngOnInit(): void {}
  submit(): void {
    this.http
      .post('http://127.0.0.1:8000/api/users/login', this.form.getRawValue())
      .subscribe(
        (res: any) => {
          console.log(res);

          //console.log(res.accessToken);
          console.log('this is the responce ' + res);
          const a = JSON.stringify(res);
          localStorage.setItem('accessToken', res.accessToken);
          sessionStorage.setItem('user', a);
          this.message = 'Sussfully logged in ';
          //window.sessionStorage.setItem(res.accessToken,stringify(this.user))
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error.error);
          this.message = error.error;
        }
      );
  }
}
