import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourneyDetailComponent } from './tourney-detail.component';

describe('TourneyDetailComponent', () => {
  let component: TourneyDetailComponent;
  let fixture: ComponentFixture<TourneyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourneyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourneyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
