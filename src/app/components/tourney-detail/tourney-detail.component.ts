import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
 
@Component({
  selector: 'app-tourney-detail',
  templateUrl: './tourney-detail.component.html',
  styleUrls: ['./tourney-detail.component.css']
})
 
export class TourneyDetailComponent implements OnInit {
 
  getId: any;
  updateForm: FormGroup;
   
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    //sets the form's default value on the edit page
    this.crudService.GetTourney(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        description: res['description'],
        p1: res['p1'],
        p2: res['p2'],
        p3: res['p3'],
        p4: res['p4'],
        p5: res['p5'],
        p6: res['p6'],
        p7: res['p7'],
        p8: res['p8'],
        r1w1: res['r1w1'],
        r1w2: res['r1w2'],
        r1w3: res['r1w3'],
        r1w4: res['r1w4'],
        r2w1: res['r2w1'],
        r2w2: res['r2w2'],
        winner: res['winner']
      });
    });
 
    this.updateForm = this.formBuilder.group({
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
      r1w2:[''],
      r1w3: [''],
      r1w4:[''],
      r2w1: [''],
      r2w2:[''],
      winner: ['']
    })
  }
 
  ngOnInit() { }
 
  onUpdate(): any {
    this.crudService.updateTourney(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        window.location.reload();
      }, (err) => {
        console.log(err);
    });
  }
 
}
