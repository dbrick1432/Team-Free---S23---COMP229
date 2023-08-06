import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor (public appService:AppService){}

  registerForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    email : new FormControl(''),
    displayName: new FormControl('')
  });

  success : any = "";

  async onSubmit() {
    this.appService.register(this.registerForm.value).subscribe(res => {
      if (res.err){
        this.success = res.err
      }
    });
  }
}
