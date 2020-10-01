import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NetWeightData } from '../model/table-interfaces'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  tableData$ = new BehaviorSubject<Array<NetWeightData>>(undefined);

  editedDataTable$ = new BehaviorSubject<Array<NetWeightData>>(undefined);

  changeDetected$ = new BehaviorSubject(false);

  constructor() { }

}
