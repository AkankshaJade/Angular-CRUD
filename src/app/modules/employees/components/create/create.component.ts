import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmployee } from '../../employee.typings';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  formGroup!: FormGroup;
  @Output() onCreateUser: EventEmitter<IEmployee> =
    new EventEmitter<IEmployee>();
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
    this.setAddEmployeeForm();
  }

  setAddEmployeeForm(): void {
    this.formGroup = new FormGroup({
      employee_name: new FormControl(),
      employee_address: new FormControl(),
      employee_contact: new FormControl(),
      employee_email: new FormControl(),
    });
  }

  onSubmit({ value }: FormGroup): void {
    this.onCreateUser.emit(value);
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
