import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmployee } from '../../employee.typings';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  @Input()  employee!: IEmployee;

   formGroup!: FormGroup;
  @Output()  onUpdate: EventEmitter<IEmployee> =
    new EventEmitter<IEmployee>();
  @Output()  onUpdateCancel: EventEmitter<void> =
    new EventEmitter<void>();

  ngOnInit(): void {
    this.setEmployeeForm();

    if (this.employee) {
      this.patchEmployeeData();
    }
  }

   setEmployeeForm(): void {
    this.formGroup = new FormGroup({
      employee_name: new FormControl(),
      employee_address: new FormControl(),
      employee_contact: new FormControl(),
      employee_email: new FormControl(),
    });
  }

   patchEmployeeData(): void {
    this.formGroup.patchValue(this.employee);
  }

   onSubmit({ value }: FormGroup): void {
    this.onUpdate.emit(value);
  }

   cancel(): void {
    this.onUpdateCancel.emit();
  }
}
