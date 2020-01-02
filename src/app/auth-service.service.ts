import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private cookies: CookieService) { }

  setAutherization(isAutherised: boolean) {
        this.cookies.set('autherised', String(isAutherised));
  }

  isAutherised() {
     return this.cookies.get('autherised');
  }
}
