import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public commonService: CommonServiceService, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.db.list('/UserList').valueChanges().subscribe(data => {
     this.commonService.arrRegisteredUser = data;
     console.log(this.commonService.arrRegisteredUser);
    });
  }

}
