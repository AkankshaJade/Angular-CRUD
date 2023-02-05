import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { IEmployee } from '../../employee.typings';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  @Input()  employee!: IEmployee;
  @Output()  onClose: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  close(): void {
    this.onClose.emit();
  }
}
