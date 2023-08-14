import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyMCComponent } from './survey-mc.component';

describe('SurveyMCComponent', () => {
  let component: SurveyMCComponent;
  let fixture: ComponentFixture<SurveyMCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyMCComponent]
    });
    fixture = TestBed.createComponent(SurveyMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
