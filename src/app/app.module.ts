import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TdetailComponent } from './tdetail/tdetail.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { AddTourneyComponent } from './components/add-tourney/add-tourney.component';
import { TourneyDetailComponent } from './components/tourney-detail/tourney-detail.component';
import { TourneysListComponent } from './components/tourneys-list/tourneys-list.component';
import { FlashMessagesModule } from 'flash-messages-angular';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    RegistrationComponent,
    ProfileComponent,
    AboutComponent,
    TournamentsComponent,
    TdetailComponent,
    DonationComponent,
    HomeComponent,
    AddTourneyComponent,
    TourneyDetailComponent,
    TourneysListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
