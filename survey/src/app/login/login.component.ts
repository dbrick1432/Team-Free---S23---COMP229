import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (public appService:AppService){}

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  success : any = "_";

  async onSubmit() {
    this.appService.login(this.loginForm.value).subscribe(res => {
      if (res == false){
        this.success = false
      }
    });
  }
}
