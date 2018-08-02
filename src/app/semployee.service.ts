import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class SEmployeeService {

  myEmployee: IEmployee[] = [
    {
      id: 10001,
      name: 'Arber Marleku',
      username: 'amarleku',
      telephone: '+38349600432',
      position: 'CEO'
    },
    {
      id: 10002,
      name: 'Petrit Berisha',
      username: 'pberisha',
      telephone: '+38349499494',
      position: 'CFO'
    },
    {
      id: 10003,
      name: 'Dorina Marku',
      username: 'dmarku',
      telephone: '+38349700454',
      position: 'Manager'
    },
    {
      id: 10004,
      name: 'Valentina Berisha',
      username: 'vberisha',
      telephone: '+38349333453',
      position: 'Team Leader'
    }
  ];

  getEmployees(){
    return this.myEmployee;
  }
  constructor() { }
}
