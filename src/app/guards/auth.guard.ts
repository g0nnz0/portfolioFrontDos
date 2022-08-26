import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(
            private afAuth: AngularFireAuth,
            private router: Router ){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {
    const user = await this.afAuth.currentUser;
    const isAuthenticated = user ? true : false;
    if(!isAuthenticated){
      alert('Tenes que estar autenticado para ingresar a esta página')
      this.router.navigate(['/portfolio']);
    }
    return isAuthenticated;
  }
  
}
