import { Injectable } from '@angular/core';

interface UserInfo {
  kind: '';
  localId: '';
  email: '';
  displayName: '';
  idToken: '';
  registered: true;
  refreshToken: '';
  expiresIn: '';
}

@Injectable({
  providedIn: 'root'
})

export class UserAccountService {

  constructor() { }
  accountInfo: UserInfo;
  isLogedIn = false;

  public set setAccountInfo(userInfo: any) {
    this.accountInfo = userInfo;
    this.isLogedIn = true;
  }
  public get getAccountInfo(): UserInfo {
    return this.accountInfo;
  }


}
