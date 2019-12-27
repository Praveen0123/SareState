import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { emailValidator } from '../theme/utils/app-validators';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { AlertService } from '../shared/services/alert.service';
import { Password } from 'primeng/primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css'],
  providers:[AlertService]
})
export class LoginComponent {
// public TypeString:string="password";
// public isPassword:boolean=true;
public TypeString:string='password';
public isPassword:boolean=true;


  public form:FormGroup;
  public settings: Settings;
  constructor(public appSettings:AppSettings, public fb: FormBuilder, public router:Router,public alertService:AlertService){
    this.settings = this.appSettings.settings; 
    this.form = this.fb.group({
      // 'Username': [null, Validators.compose([Validators.required])],
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    });
  }

  ngOnInit() {
    if(localStorage.getItem("login_user_info")) {
      localStorage.removeItem("login_user_info");
    }
  }

  public onSubmit(values:Object):void {
    if (this.form.valid) {
      if (values['email'] == 'admin@bm.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/sare']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("login_user_info",values['email']);
        console.log(localStorage.getItem("login_user_info"));
        // localStorage.setItem('login_password',values['password']);
        // console.log(localStorage.getItem('login_password'))
      }
     else if (values['email'] == 'builder@bm.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/sare']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("login_user_info",values['email']);
        console.log(localStorage.getItem("login_user_info"));
      }
     else if (values['email'] == 'broker@bm.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/sare']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("login_user_info",values['email']);
        console.log(localStorage.getItem("login_user_info"));
      }
     else if (values['email'] == 'customer@bm.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/sare']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("login_user_info",values['email']);
        console.log(localStorage.getItem("login_user_info"));
      }
     else if (values['email'] == 'agent@bm.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/sare']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("login_user_info",values['email']);
        console.log(localStorage.getItem("login_user_info"));
      }
     else if (values['email'] == 'realtor@bm.com' && values['password'] == 'Password1!1') {
        this.router.navigate(['/sare']);
        this.alertService.createAlert("Login Success",1);
        localStorage.setItem("login_user_info",values['email']);
        console.log(localStorage.getItem("login_user_info"));
      }
     
      else {
        this.alertService.createAlert("Invalid Credentials",0);
      }
    }
  }

public ChangetextType(isPassword){
    console.log(isPassword)
if(isPassword){
  this.TypeString="password"
  console.log(this.TypeString)
}else{
  this.TypeString="text"
  console.log(this.TypeString)
}

}


  

  ngAfterViewInit(){
    this.settings.loadingSpinner = false; 
  }
}