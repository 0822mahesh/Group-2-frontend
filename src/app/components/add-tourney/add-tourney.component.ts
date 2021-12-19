import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-add-tourney',
  templateUrl: './add-tourney.component.html',
  styleUrls: ['./add-tourney.component.css']
})
 
export class AddTourneyComponent implements OnInit {
 
  tourneyForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.tourneyForm = this.formBuilder.group({
      name: [''],
      description: [''],
      p1: [''],
      p2: [''],
      p3: [''],
      p4: [''],
      p5: [''],
      p6: [''],
      p7: [''],
      p8: [''],
      r1w1: [''],
      r1w2: [''],
      r1w3: [''],
      r1w4: [''],
      r2w1: [''],
      r2w2: [''],
      winner: ['']
    })
  }
 
  ngOnInit() { }
 
  onSubmit(): any {
    this.crudService.AddTourney(this.tourneyForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/tourneys-list'))
      }, (err) => {
        console.log(err);
    });
  }
 
}