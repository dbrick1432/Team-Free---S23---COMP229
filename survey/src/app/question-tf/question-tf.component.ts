import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-tf',
  templateUrl: './question-tf.component.html',
  styleUrls: ['./question-tf.component.css']
})
export class QuestionTfComponent {
  queNum : number = 0;

  quesForm = new FormGroup({
    question: new FormControl('')
  })

  onSubmit() {
    let result :any = this.quesForm.value
    result['queNum'] = this.queNum;
    result['type'] = 'tf';
    return(result)
  }
}
