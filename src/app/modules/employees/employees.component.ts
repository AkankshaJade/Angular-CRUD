import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { IEmployee } from './employee.typings';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  @ViewChild('table') private table!: MatTable<any>;

  public dataSource: MatTableDataSource<IEmployee> =
    new MatTableDataSource<IEmployee>([
      {
        employee_name: 'Akanksha Jade',
        employee_address: 'Pune',
        employee_contact: '123456789',
        employee_email: 'akanksha@gmail.com',
      },
    ]);

  public displayedColumns: string[] = [
    'employee_name',
    'employee_address',
    'employee_contact',
    'employee_email',
    'view',
    'update',
    'delete',
  ];
   showEmployeeList: boolean = true;
   showAddEmployee: boolean = false;
   showUpdateEmployee: boolean = false;
   showViewEmployee: boolean = false;

   selectedEmployee!: IEmployee;
   selectedEmployeeIndex!: number;

    get progressBarValue(): number {
    return (this.dataSource.data.length * 100) / 10;
  }

  onCreateUser(employee: any): void {
    this.dataSource.data = [...this.dataSource.data, employee];
    this.showAddEmployee = false;
    this.showEmployeeList = true;
  }

   onAddEmployee(): void {
    if (this.dataSource.data.length < 10) {
      this.showEmployeeList = false;
      this.showAddEmployee = true;
    } else {
      alert('You have reached maximum limit of adding employees');
    }
  }

   onCreateCancel(): void {
    this.showEmployeeList = true;
    this.showAddEmployee = false;
  }

   onUpdateCancel(): void {
    this.showUpdateEmployee = false;
    this.showEmployeeList = true;
  }

   onUpdateEmployee(index: number, employee: IEmployee): void {
    this.selectedEmployee = employee;
    this.selectedEmployeeIndex = index;
    this.showEmployeeList = false;
    this.showUpdateEmployee = true;
  }

   onDeleteEmployee(index: number): void {
    this.dataSource.data = this.dataSource.data.filter((x, i) => i !== index);
  }

   onUpdate(employee: IEmployee): void {
    this.dataSource.data = this.dataSource.data.map((x, i) =>
      i != this.selectedEmployeeIndex ? x : employee
    );

    this.showUpdateEmployee = false;
    this.showEmployeeList = true;
  }

   onViewEmployee(employee: IEmployee): void {
    this.selectedEmployee = employee;

    this.showEmployeeList = false;
    this.showViewEmployee = true;
  }

   onViewClosed(): void {
    this.showViewEmployee = false;
    this.showEmployeeList = true;
  }
}
