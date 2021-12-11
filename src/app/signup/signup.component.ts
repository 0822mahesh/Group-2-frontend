import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router //private form: FormGroup
  ) {}

  ngOnInit(): void {}
  onSubmit(signupForm: any) {
    console.log(JSON.stringify(signupForm.value));
    this.http
      .post('http://127.0.0.1:8000/api/users', signupForm.value)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/login']);
      });
  }
}
