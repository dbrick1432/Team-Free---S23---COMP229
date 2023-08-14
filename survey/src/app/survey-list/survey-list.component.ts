import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from '../app.service';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */

  surveys:any = [];
  /*
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  */
  constructor (public appService:AppService){}

  ngOnInit(){
    this.appService.getSurveys().subscribe({
      next: res => {
        this.surveys = res;
        this.surveys.forEach(this.addColRow);
      },
      error: e => console.log("error")
    })
  }

  addColRow(item: any, index: any, arr: any) {
    arr[index].expire= arr[index].expire.substring(0,10)
    arr[index].cols = 1;
    arr[index].rows = 1;
    if (!arr[index].thumbnail || arr[index].thumbnail == ""){
      arr[index].thumbnail = "assets/no-image.jpg";
    }
  }
}
