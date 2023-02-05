import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';

const routes: Route[] = [{ path: '', component: EmployeesComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
