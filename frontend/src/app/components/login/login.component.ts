import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    private auth:AuthService,
    private fMsgSer: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmitLogin(){

    const user = {
      username: this.username,
      password: this.password
    }

    this.auth.authenticateUser(user)
    .subscribe(data => {
      // console.log(data);
      if(data.success){
        this.auth.storeUserData(data.token, data.user);
        this.fMsgSer.show("You are logged in Successfully", {cssClass: 'alert alert-success', timeout: 5000});
        this.router.navigate(['dashboard']);
      } else {
        this.fMsgSer.show(data.msg, {cssClass: 'alert alert-danger', timeout: 5000});
        this.router.navigate(['login']);
      }
    });

  }
}
