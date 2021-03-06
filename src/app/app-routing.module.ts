import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { TdetailComponent } from './tdetail/tdetail.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TourneysListComponent } from './components/tourneys-list/tourneys-list.component';
import { AddTourneyComponent } from './components/add-tourney/add-tourney.component';
import { TourneyDetailComponent } from './components/tourney-detail/tourney-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'tournaments',
    component: TournamentsComponent,
  },
  {
    path: 'tournaments/:t_id',
    component: TdetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'donation',
    component: DonationComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'tourneys-list', component: TourneysListComponent },
  { path: 'add-tourney', component: AddTourneyComponent },
  { path: 'edit-tourney/:id', component: TourneyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
