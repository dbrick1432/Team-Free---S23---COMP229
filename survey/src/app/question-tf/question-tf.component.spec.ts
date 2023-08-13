import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTfComponent } from './question-tf.component';

describe('QuestionTfComponent', () => {
  let component: QuestionTfComponent;
  let fixture: ComponentFixture<QuestionTfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionTfComponent]
    });
    fixture = TestBed.createComponent(QuestionTfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
