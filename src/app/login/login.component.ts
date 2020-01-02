import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms'
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private route: Router, private authSer: AuthServiceService) { }


  loginSubmit(userName, password) {
    this.db.list('/UserList', ref => ref.orderByChild('Email').equalTo(userName)).valueChanges().subscribe(data => {
      if (data.length !== 0) {
          if (data[0]['password'] ===  password) {
            this.route.navigate(['/userlist']);
            this.authSer.setAutherization(true);
          } else {
            alert('invalid password');
            this.authSer.setAutherization(false);
          }
      } else {
        alert('user not recognised');
        this.authSer.setAutherization(false);
      }

    });
  }

  ngOnInit() {
  }

}
