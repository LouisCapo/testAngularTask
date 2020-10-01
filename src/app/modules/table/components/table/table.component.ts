import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../../shared/services/table.service';
import { ApiService } from '../../../../shared/services/api.service';
import { NetWeightData } from '../../../../shared/model/table-interfaces'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  constructor(private tableService: TableService, private apiService: ApiService) {}

  isEdit = false;
  isSaveButtonActive = true;

  columns: Array<string>;
  rows: Array<number>;
  tableData: Array<NetWeightData>;

  ngOnInit(): void {
    this.apiService.getTableData().subscribe(res => {
      this.tableService.tableData$.next(res);
    })

    this.tableService.tableData$.subscribe(res => {
      this.updateValues(res);
    })

  }

  onSave(){
    this.tableService.changeDetected$.next(true);
    this.isEdit = false;
  }

  onEdit(){
    this.isEdit = !this.isEdit;
  }

  onInputChanged(event){
    console.log(event);
    this.isSaveButtonActive = event;
  }

  private updateValues(data: Array<NetWeightData>){
    this.columns = data[0].header;
    this.rows = data[0].netWeightValues;
    this.tableData = data;
  }

}
