import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { type } from 'os';

@Component({
  selector: 'app-tdetail',
  templateUrl: './tdetail.component.html',
  styleUrls: ['./tdetail.component.css'],
})
export class TdetailComponent implements OnInit {
  tournament: any;
  show: boolean = false;

  form: any = this.formBuilder.group({
    tId: '',
    playerFirstName: '',
    playerLastName: '',
    playeremail: '',
    playerphoneNumber: '',
  });

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      console.log(params);

      this.http
        .get(`http://127.0.0.1:5000/api/tournaments/${params['t_id']}`)
        .subscribe((res) => {
          this.tournament = res;
          console.log(res);
        });
    });
  }
  showRegistration() {
    this.show = !this.show;
  }
  psubmit(): void {
    console.log(this.form);
    this.http
      .post(
        'http://127.0.0.1:5000/api/tournaments/player',
        this.form.getRawValue()
      )
      .subscribe((res: any) => console.log(res));
  }
}
