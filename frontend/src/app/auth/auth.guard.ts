import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    const usuarioLogado = this.authService.usuarioLogado;
    let url = state.url;
    if(usuarioLogado) {
      if(route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.tipo)===-1) {
        this.router.navigate(['login'], { queryParams: {error: "Proibido o acesso a " + url}});
        return false;
      }

      return true;
    }

    this.router.navigate(['/login'], { queryParams: {error: "Deve fazer o login antes de acessar " + url}});
    return false;

  }
  
}
