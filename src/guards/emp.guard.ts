import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs/Observable';

export class EmpGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return confirm("Do you really want to visit this page ?");
    }

}