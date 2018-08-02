import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';
import { SEmployeeService } from '../semployee.service';

@Component({
  selector: 'app-human-resources',
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.css']
})
export class HumanResourcesComponent implements OnInit {
  myEmployee: IEmployee[];

  constructor(private SEmployee: SEmployeeService) { }

  ngOnInit() {
    this.SEmployee.getEmployees()
      .subscribe(myEmployee => this.myEmployee = myEmployee);
  }
}
