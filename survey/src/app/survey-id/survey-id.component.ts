import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SurveyMCComponent } from '../survey-mc/survey-mc.component';
import { SurveyTFComponent } from '../survey-tf/survey-tf.component';

@Component({
  selector: 'app-survey-id',
  templateUrl: './survey-id.component.html',
  styleUrls: ['./survey-id.component.css']
})
export class SurveyIdComponent {

  @ViewChild('container', {read: ViewContainerRef}) container! : ViewContainerRef;

  answerQueue :any = [];
  id : any;

  constructor (public appService:AppService, private route: ActivatedRoute){}
  title : String = "";
  surveyForm = new FormGroup({
  });

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.appService.getSurvetById(this.id).subscribe(res => {
      this.title = res.title;
      for (let x in res.question){
        let question = res.question.find((e: { qNumber: string; }) => parseInt(e.qNumber) == parseInt(x) + 1 )
        let bool = question.choice1Count === undefined
        if (bool){
          this.addTF(question.qNumber, question.question, question._id)
        } else {
          this.addMC(question.qNumber, question.question, question._id)
        }
      }
    });
  }

  addTF(queNum : String, question : String, id : any) {
    this.answerQueue.push(this.container.createComponent(SurveyTFComponent));
    this.answerQueue[this.answerQueue.length - 1].instance.queNum = queNum
    this.answerQueue[this.answerQueue.length - 1].instance.question = question
    this.answerQueue[this.answerQueue.length - 1].instance.id = id
  }

  addMC(queNum : String, question : String, id : any) {
    this.answerQueue.push(this.container.createComponent(SurveyMCComponent));
    this.answerQueue[this.answerQueue.length - 1].instance.queNum = queNum
    this.answerQueue[this.answerQueue.length - 1].instance.question = question
    this.answerQueue[this.answerQueue.length - 1].instance.id = id
  }

  async submit(){
    let result :any = this.surveyForm.value
    result.id = this.id;
    result.question = [];
    for (let i = 0; i < this.answerQueue.length; i ++){
      result.question[i] = this.answerQueue[i].instance.onSubmit();
    }
    this.appService.submitSurvey(this.id, result).subscribe(res => {
      console.log(res)
    });
  }
}
