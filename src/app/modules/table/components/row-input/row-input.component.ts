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
  valuesCopy: Array<NetWeightData>;

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.valueControl = new FormControl(this.value);
    this.valueControl.valueChanges.subscribe((formValue) => {
      if (formValue === 0 || !Number.isInteger(formValue)) {
        this.toolTipMessage =
          'Значение должно быть больше 0 и должно быть целым числом';
        this.isFormInvalid = true;
        this.onValueChanges.emit(true);
        return;
      }
      this.valuesCopy = JSON.parse(
        JSON.stringify(this.tableService.tableData$.getValue())
      );
      this.valuesCopy[0].netWeightValues[this.index] = formValue;
      if (
        (this.index === 0 &&
          formValue > this.valuesCopy[0].netWeightValues[this.index + 1]) ||
        (this.index !== 0 &&
          this.index !== this.valuesCopy[0].netWeightValues.length &&
          (formValue < this.valuesCopy[0].netWeightValues[this.index - 1] ||
            formValue > this.valuesCopy[0].netWeightValues[this.index + 1])) ||
        (this.index === this.valuesCopy[0].netWeightValues.length &&
          formValue < this.valuesCopy[0].netWeightValues[this.index - 1])
      ) {
        this.toolTipMessage = 'Вес каждого последующего размера должен быть больше предыдущего!';
        this.isFormInvalid = true;
        this.onValueChanges.emit(true);
        return;
      } else {
        this.toolTipMessage = '';
        this.toolTipMessage = '';
        this.isFormInvalid = false;
        this.onValueChanges.emit(false);
      }
    });
  }
}
