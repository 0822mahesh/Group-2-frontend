import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css'],
})
export class TournamentsComponent implements OnInit {
  tournaments: any = '';
  li: any;
  lis = [];
  a: any = sessionStorage.getItem('user');
  b: any = JSON.parse(this.a);
  c: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/tournaments/').subscribe((res) => {
      console.log(res);
      this.li = res;
      if (this.b.isAdmin) {
        this.c = true;
        console.log(this.c);
      } else {
        this.c = false;
      }

      console.log(this.b.isAdmin);
      console.log(this.b.lastName);
    });
  }
}
