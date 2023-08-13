import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyIdComponent } from './survey-id.component';

describe('SurveyIdComponent', () => {
  let component: SurveyIdComponent;
  let fixture: ComponentFixture<SurveyIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyIdComponent]
    });
    fixture = TestBed.createComponent(SurveyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
