import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMcComponent } from './question-mc.component';

describe('QuestionMcComponent', () => {
  let component: QuestionMcComponent;
  let fixture: ComponentFixture<QuestionMcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionMcComponent]
    });
    fixture = TestBed.createComponent(QuestionMcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
