import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTFComponent } from './survey-tf.component';

describe('SurveyTFComponent', () => {
  let component: SurveyTFComponent;
  let fixture: ComponentFixture<SurveyTFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyTFComponent]
    });
    fixture = TestBed.createComponent(SurveyTFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
