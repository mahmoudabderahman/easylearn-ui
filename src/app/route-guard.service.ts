/**
 * This service is responsible for checking if a user can see logged in users pages.
 */
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';
import {TokenStorageService} from './services/tokenStorageService';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router: Router, private auth: AuthenticationService, private tokenStorageService: TokenStorageService) { }

  /**
   * This method is responsible for activating pages for logged in users.
   * @param route
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenStorageService.getToken()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
