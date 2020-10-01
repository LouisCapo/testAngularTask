import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NetWeightData } from '../model/table-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor() { }

getTableData(): Observable<Array<NetWeightData>>{
  return new Observable((observer) => {
    observer.next([{ 
      netItemId: 1, // id таблицы весов
      header: ['41', '42', '43', '44'], // заголовок таблицы (размеры)
      netWeightValues: [300, 350, 360, 400]
    }])
  })
}

}
