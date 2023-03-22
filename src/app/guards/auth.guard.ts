import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  private bool= false;
  constructor(
    private router: Router
  ) { }

  redirect(flag:boolean) {
    if (!flag) {
      this.router.navigate(['/inicio/login']);
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');

    console.log('soy guard :: token',token);
    console.log('soy guard :: rol',rol);

    if (token) {
      this.redirect(true);
      this.bool = true;

    } else {
      this.redirect(false);
      this.bool = false;
    }
    return this.bool;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
