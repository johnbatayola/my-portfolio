import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseAreaComponent } from './expertise-area.component';

describe('ExpertiseAreaComponent', () => {
  let component: ExpertiseAreaComponent;
  let fixture: ComponentFixture<ExpertiseAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiseAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertiseAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
