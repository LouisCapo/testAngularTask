import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableService } from 'src/app/shared/services/table.service';
import { NetWeightData } from '../../../../shared/model/table-interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-row-input',
  templateUrl: './row-input.component.html',
  styleUrls: ['./row-input.component.scss'],
})
export class RowInputComponent implements OnInit {
  @Input() value: string;
  @Input() index: number;

  @Output() onValueChanges = new EventEmitter();

  valueControl: FormControl;

  isFormInvalid = false;
  toolTipMessage = '';

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.valueControl = new FormControl(this.value);
    let valueArr = this.tableService.tableData$.getValue();
    this.tableService.changeDetected$.subscribe((res) => {
      console.log(res);
      if (res) {
        valueArr[0].netWeightValues[this.index] = parseInt(
          this.valueControl.value
        );

        this.tableService.tableData$.next(valueArr);
      }
    });

    this.valueControl.valueChanges.subscribe((formValue) => {
      if (
        (this.index !== 0 &&
          formValue < valueArr[0].netWeightValues[this.index + 1] &&
          formValue > valueArr[0].netWeightValues[this.index + 1]) ||
        (this.index === 0 &&
          formValue < valueArr[0].netWeightValues[this.index + 1])
      ) {
        this.toolTipMessage = '';
        this.isFormInvalid = false;
        this.onValueChanges.emit(false);
      } else {
        this.toolTipMessage =
          'Вес каждого последующего размера, должен быть больше предидущего';
        this.isFormInvalid = true;
        this.onValueChanges.emit(true);
        return;
      }

      console.log(formValue);
      if (formValue === 0) {
        this.isFormInvalid = true;
        this.onValueChanges.emit(true);
        return;
      }
      this.onValueChanges.emit(false);
    });
  }
}
