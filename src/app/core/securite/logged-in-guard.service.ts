import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLoggedIn();
   }

   checkLoggedIn(): boolean {
    // if (this.authService.isLoggedIn()) {
    //     return true;
    // }
    // this.router.navigate(['login']);
    return false;
   }


}
