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
  players: any;
  show: boolean = false;
  li: any;
  lis = [];
  // tId: String = "";
  //   playerFirstName:String = "";
  //   playerLastName:String="";
  //   playeremail:String="";
  //   playerphoneNumber:Number | undefined;

  // form: any = this.formBuilder.group({

  // });

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
        .get(`http://127.0.0.1:8000/api/tournaments/${params['t_id']}`)
        .subscribe((res) => {
          this.tournament = res;
          console.log(res);
        });
      this.http
        .get(`http://127.0.0.1:8000/api/tournaments/${params['t_id']}/players`)
        .subscribe((resplayers) => {
          this.li = resplayers;
          //this.players=resplayers;
          console.log(this.li);
        });
    });
  }
  showRegistration() {
    this.show = !this.show;
  }
  //   psubmit(): void {
  //     console.log(this.form);
  //     this.http
  //       .post(
  //         'http://127.0.0.1:5000/api/tournaments/player',
  //         this.form.getRawValue()
  //       )
  //       .subscribe((res: any) => console.log(res));
  //   }
  onSubmit(contactForm: any) {
    console.log(typeof contactForm);
    console.log(contactForm);
    console.log(this.tournament._id);
    console.log(typeof this.tournament._id);

    contactForm.value.tournament = this.tournament._id;
    const a = JSON.stringify(contactForm.value);
    console.log(a);
    console.log(contactForm.value);
    this.http
      .post('http://127.0.0.1:8000/api/tournaments/player', contactForm.value)
      .subscribe((res: any) => console.log(res));
  }
}
