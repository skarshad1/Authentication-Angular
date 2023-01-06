import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
                ) { }

   canActivate(){
    let currUser = this.authService.currentUser;
    if ( currUser && currUser.admin) return true;
    
    this.router.navigate(['/no-access']);
    return false;
       
   }
}