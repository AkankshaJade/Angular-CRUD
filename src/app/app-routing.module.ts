import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './modules/employees/employees.component';

const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () =>
      import('./modules/employees/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  { path: '**', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
