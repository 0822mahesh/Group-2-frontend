import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
 
@Component({
  selector: 'app-tourneys-list',
  templateUrl: './tourneys-list.component.html',
  styleUrls: ['./tourneys-list.component.css']
})
 
export class TourneysListComponent implements OnInit {
   
  Tourneys:any = [];
 
  constructor(private crudService: CrudService) { }
 
  ngOnInit(): void {
    this.crudService.GetTourneys().subscribe(res => {
      console.log(res)
      this.Tourneys =res;
    });    
  }
 
  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteTourney(id).subscribe((res) => {
        this.Tourneys.splice(i, 1);
      })
    }
  }
 
}