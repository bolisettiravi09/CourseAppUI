import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {EmployeeFormComponent} from './../app/employee/employee-form.component';
import { Observable } from 'rxjs/Observable';

export class LeavingGuard implements CanDeactivate<EmployeeFormComponent>{
    canDeactivate(component: EmployeeFormComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
       if(component.hasFormChanged()){
        confirm('Unsaved Changes!! Do you want to leave?');
       }
        return true;
    }
    
}
