
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from 'src/app/services/login/login.service';
import { SnotifyService } from 'ng-snotify';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  path: ActivatedRouteSnapshot[]; route: ActivatedRouteSnapshot;
  
  constructor(private loginService: LoginService, private snotifyService:SnotifyService) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 if(this.loginService.userHasRole(route.data.role) ){
   return true ;
 }else{
   this.snotifyService.warning('No tiene los permisos necesarios para realizar esta acción', 'Atención'); 
   return false;
 }
    
  }



}

