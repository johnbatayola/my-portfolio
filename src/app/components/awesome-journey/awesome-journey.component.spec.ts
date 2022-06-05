import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeJourneyComponent } from './awesome-journey.component';

describe('AwesomeJourneyComponent', () => {
  let component: AwesomeJourneyComponent;
  let fixture: ComponentFixture<AwesomeJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeJourneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
