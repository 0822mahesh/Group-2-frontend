import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesModule } from 'flash-messages-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentUser1: any;
  constructor(
    //private logindata:LoginComponent
    private http: HttpClient,
    private router: Router,
    private ngFlashMessageService: FlashMessagesModule,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentUser1 = this.getUser();
    this.currentUser = JSON.parse(this.currentUser1);
    console.log('this is test ' + this.currentUser.firstName);
  }

  getUser() {
    return sessionStorage.getItem('user');
  }
  onDelete() {
    if (window.confirm('Do you want to go ahead?')) {
      this.currentUser1 = this.getUser();
      this.currentUser = JSON.parse(this.currentUser1);
      //const header = {'Authorization':`Bearer ${localStorage.getItem('accessToken')}`}
      const value = 'Bearer ' + localStorage.getItem('accessToken');
      console.log(typeof value);
      const headers = new HttpHeaders({ authorization: value });

      console.log(headers);
      console.log(
        'my neader is ' + 'Bearer ' + localStorage.getItem('accessToken')
      );
      this.http
        .delete(`http://127.0.0.1:8000/api/users/${this.currentUser._id}`, {
          headers,
        })
        .subscribe(() => {
          localStorage.removeItem('accessToken');
          sessionStorage.removeItem('user');
          this.router.navigate(['/login']);
        });
    }
  }

  onUpdate(updateForm: any) {
    console.log(JSON.stringify(updateForm.value));

    const value = 'Bearer ' + localStorage.getItem('accessToken');

    const headers = new HttpHeaders({ authorization: value });
    this.http
      .put(
        `http://127.0.0.1:8000/api/users/${this.currentUser._id}`,
        updateForm.value,
        { headers }
      )
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/']);
      });
  }
}
