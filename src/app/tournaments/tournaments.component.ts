import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css'],
})
export class TournamentsComponent implements OnInit {

  tournments: Array<any> = [];
  lis = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Array<any>>('http://127.0.0.1:5000/api/tournaments/').subscribe((res) => {
      console.log(res);
      this.tournments = res;
    });
  }
}
