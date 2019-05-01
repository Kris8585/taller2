
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from 'src/app/services/login/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  path: ActivatedRouteSnapshot[]; route: ActivatedRouteSnapshot;
  
  constructor(private loginService: LoginService) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.loginService.userHasRole(route.data.role);
  }



}

