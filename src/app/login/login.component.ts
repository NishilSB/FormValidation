import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms'
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { GlobalConst } from '../Constants/constant';
import {environment} from '../../environments/environment';
import { UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFireDatabase,
              private route: Router,
              private authSer: AuthServiceService,
              private cook: CookieService,
              private httpClient: HttpClient,
              private userAcc: UserAccountService) { }

  loginSubmit(loginForm: NgForm) {
    if (!loginForm.valid){ return false; }
    // console.log(loginForm);
    this.loginReq(loginForm.value.userName, loginForm.value.password).subscribe(data => {
      console.log(data);
      if (data) {
        this.userAcc.setAccountInfo = data;
        this.route.navigate(['/userlist']);
      } else {
        alert('login failed');
      }
    });
  }

  loginReq(uname, password) {
    return this.httpClient.post(GlobalConst.REQUEST_API.SIGN_IN + environment.firebase.apiKey,
                        {email: uname, password, returnSecureToken: true});
  }

  onSignUp() {
    this.route.navigate(['/signup']);

  }
  ngOnInit() {
  }

}
