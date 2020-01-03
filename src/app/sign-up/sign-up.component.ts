import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';
import {GlobalConst} from '../Constants/constant';
import {environment} from '../../environments/environment';
import { UserAccountService } from '../services/user-account.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private commonService: CommonServiceService,
              private router: Router,
              private db: AngularFireDatabase,
              private httpClient: HttpClient,
              private userAcc: UserAccountService) { }

  userObject = {firstname: '', lastName: '', email: '', password: '' };
  log(x) {
    console.log(x.control);

  }
  formSubmit(playlistForm: NgForm) {
    console.log(playlistForm);
    playlistForm.resetForm();
  }

  addToUserArray(userObject) {
    const objTemp: any = new Object();
    objTemp.Name = userObject.firstName;
    objTemp.LastName = userObject.lastName;
    objTemp.Email = userObject.email;
    objTemp.password = userObject.password;
    this.commonService.arrRegisteredUser.push(objTemp);
    this.clearData();
    this.signUp(objTemp).subscribe(data => {
      console.log('signup result--->', data);
      if (data) {
          this.userAcc.setAccountInfo = data;
          this.router.navigate(['/userlist']);
      } else {
        console.error('signup failed');
      }
    });
    // console.log(this.commonService.arrRegisteredUser);
    // this.submitToFireBase(objTemp);
  }

  clearData() {
    this.userObject = {firstname: '', lastName: '', email: '', password: '' };
  }
  showUserList() {
    this.router.navigate(['/userlist']);
  }

  submitToFireBase(newUserObj) {

    this.db.database.ref('/UserList').push(newUserObj);
    // console.log(this.fireStore.collection('UserList').add({newUserObj}).then(
    //   (result) => {console.log('add success', result); },
    //   (error) => {console.log('add rejected', error); }
    //   ));

  }

  signUp(obj) {
    const api = GlobalConst.REQUEST_API.SIGNUP_API + environment.firebase.apiKey;
    return this.httpClient.post(api,
      {email: obj.Email, password: obj.password, returnSecureToken: true} );
  }
  ngOnInit() {
  }
}
