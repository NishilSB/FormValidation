import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate {
  constructor(private authSer: AuthServiceService, private route: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authSer.isAutherised() === 'true') {
        return true;
      } else {
        this.route.navigate(['/login']);
        return false;
      }

  }
}
