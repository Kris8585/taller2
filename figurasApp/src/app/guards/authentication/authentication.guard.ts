import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'; 
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements  CanActivate{
  path: ActivatedRouteSnapshot[];  route: ActivatedRouteSnapshot;
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean {
    return true;
  }
 

  
}
