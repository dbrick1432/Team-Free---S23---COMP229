import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCreateComponent } from './survey-create.component';

describe('SurveyCreateComponent', () => {
  let component: SurveyCreateComponent;
  let fixture: ComponentFixture<SurveyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyCreateComponent]
    });
    fixture = TestBed.createComponent(SurveyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
