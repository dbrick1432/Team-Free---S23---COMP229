import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { QuestionMcComponent } from '../question-mc/question-mc.component';
import { QuestionTfComponent } from '../question-tf/question-tf.component';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.css']
})
export class SurveyCreateComponent {
  @ViewChild('container', {read: ViewContainerRef}) container! : ViewContainerRef;

  curQueNum : number = 0;

  constructor(){}

  addMC() {
    this.curQueNum ++;
    let temp = this.container.createComponent(QuestionMcComponent);
    temp.instance.queNum = this.curQueNum;
  }

  addTF() {
    this.curQueNum ++;
    let temp = this.container.createComponent(QuestionTfComponent);
    temp.instance.queNum = this.curQueNum;
  }

}
