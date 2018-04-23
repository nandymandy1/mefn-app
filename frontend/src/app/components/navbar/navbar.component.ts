import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private fMsgSer: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  // Logout Option
  onLogoutClick(){
    this.auth.logout();
    this.fMsgSer.show("You are logged out Successfully", {cssClass: 'alert alert-success', timeout: 5000});
    this.router.navigate(['/login']);
    return false;
  }

}
