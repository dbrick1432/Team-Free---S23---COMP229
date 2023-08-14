import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-survey-mc',
  templateUrl: './survey-mc.component.html',
  styleUrls: ['./survey-mc.component.css']
})
export class SurveyMCComponent {
  queNum : String = "";
  question : String = "";
  id : String = "";

  quesForm = new FormGroup({
    mcChoice: new FormControl('')
  })
  onSubmit() {
    let result :any = this.quesForm.value
    result.id = this.id;
    return(result)
  }
}
