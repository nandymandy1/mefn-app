import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../service/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email:String;
  password: String;
  c_password: String;

  constructor(private validateService: ValidateService,
     private fMsgSer: FlashMessagesService,
     private auth: AuthService,
     private router: Router
    ) {

  }

  ngOnInit() {
  }

  onRegisterSubmit(){
    if(this.c_password === this.password){
      const user = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      };

      // Required Fields
      if(!this.validateService.validateRegister(user)){
        this.fMsgSer.show("Please Fill in all fileds", {cssClass: 'alert alert-danger', timeout: 5000});
        return false;
      }
      // Validate Email
      if(!this.validateService.validateEmail(user.email)){
        this.fMsgSer.show("Please Fill a Valid Email", {cssClass: 'alert alert-danger', timeout: 5000});
        return false;
      }

      // Register User
      this.auth.registerUser(user).subscribe(data =>{
        if(data.success){
          this.fMsgSer.show("User Registration Successful", {cssClass: 'alert alert-success', timeout: 5000});
          this.router.navigate(['/login']);
        } else {
          this.fMsgSer.show("Something went Worng User Registration Failed", {cssClass: 'alert alert-danger', timeout: 5000});
          this.router.navigate(['/login']);
        }
      });


    } else {
      this.fMsgSer.show("Password Doesn\'t Maches", {cssClass: 'alert alert-danger', timeout: 5000});
    }
  }


  

}
