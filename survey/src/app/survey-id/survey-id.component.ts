import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-survey-id',
  templateUrl: './survey-id.component.html',
  styleUrls: ['./survey-id.component.css']
})
export class SurveyIdComponent {

  constructor (public appService:AppService, private route: ActivatedRoute){}

  surveyForm = new FormGroup({
    title: new FormControl(''),
    thumbnail: new FormControl(''),
    expire : new FormControl('')
  });

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.appService.getSurvetById(id).subscribe(res => {
      console.log(res)
    });
  }

  submit(){

  }
}
