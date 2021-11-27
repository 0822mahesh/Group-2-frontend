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
  //form: FormGroup;
  form = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confromPassword: '',
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) //private form: FormGroup
  {}

  ngOnInit(): void {}
  submit(): void {
    console.log(this.form.getRawValue());
    this.http
      .post('http://127.0.0.1:5000/api/users', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }
}
