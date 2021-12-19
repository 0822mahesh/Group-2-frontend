import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneysListComponent } from './tourneys-list.component';

describe('TourneysListComponent', () => {
  let component: TourneysListComponent;
  let fixture: ComponentFixture<TourneysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourneysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
