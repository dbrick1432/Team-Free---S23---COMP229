import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { QuestionMcComponent } from '../question-mc/question-mc.component';
import { QuestionTfComponent } from '../question-tf/question-tf.component';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent {
  @ViewChild('container', {read: ViewContainerRef}) container! : ViewContainerRef;

  curQueNum : number = 0;
  questionQueue :any = [];
  constructor (public appService:AppService){}

  surveyForm = new FormGroup({
    title: new FormControl(''),
    thumbnail: new FormControl(''),
    expire : new FormControl('')
  });


  addMC() {
    this.curQueNum ++;
    this.questionQueue.push(this.container.createComponent(QuestionMcComponent));
    this.questionQueue[this.curQueNum -1].instance.queNum = this.curQueNum;

  }

  addTF() {
    this.curQueNum ++;
    this.questionQueue.push(this.container.createComponent(QuestionTfComponent));
    this.questionQueue[this.curQueNum -1].instance.queNum = this.curQueNum;
  }

  remveLastQue() {
    if (this.curQueNum > 0){
      this.curQueNum--;
      this.container.detach(this.curQueNum);
      this.questionQueue.pop();
    }
  }

  async submit() {
    let result :any = this.surveyForm.value
    result.question = [];
    for (let i = 0; i < this.questionQueue.length; i ++){
      result.question[i]  = this.questionQueue[i].instance.onSubmit();
    }
    this.appService.createSurvey(result).subscribe(res => {
      console.log(res)
    });
  }
}
