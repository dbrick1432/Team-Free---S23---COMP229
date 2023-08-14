import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-survey-tf',
  templateUrl: './survey-tf.component.html',
  styleUrls: ['./survey-tf.component.css']
})
export class SurveyTFComponent {
  queNum : String = "";
  question : String = "";
  id : String = "";

  quesForm = new FormGroup({
    trueOrFalse: new FormControl('')
  })
  
  onSubmit() {
    let result :any = this.quesForm.value
    result.id = this.id;
    return(result)
  }
}
