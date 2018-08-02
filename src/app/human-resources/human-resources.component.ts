import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-resources',
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.css']
})
export class HumanResourcesComponent implements OnInit {

  myEmployee: any[] = [
    {
      id: '10001',
      name: 'Arber Marleku',
      username: 'amarleku',
      telephone: '+38349600432',
      position: 'CEO'
    },
    {
      id: '10001',
      name: 'Petrit Berisha',
      username: 'pberisha',
      telephone: '+38349499494',
      position: 'CFO'
    },
    {
      id: '10001',
      name: 'Dorina Marku',
      username: 'dmarku',
      telephone: '+38349700454',
      position: 'CFO'
    }
  ];
  title = 'Testing';

  constructor() { }

  ngOnInit() {
  }

}
