import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-mc',
  templateUrl: './question-mc.component.html',
  styleUrls: ['./question-mc.component.css']
})
export class QuestionMcComponent {
  queNum : number = 0;

  quesForm = new FormGroup({
    question: new FormControl('')
  })

  onSubmit() {
    let result :any = this.quesForm.value
    result['queNum'] = this.queNum;
    result['type'] = 'mc';
    return(result)
  }
}
