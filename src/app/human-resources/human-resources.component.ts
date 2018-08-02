import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';
import { SEmployeeService } from '../semployee.service';
import { v4 as uuid } from 'uuid';



@Component({
  selector: 'app-human-resources',
  templateUrl: './human-resources.component.html',
  styleUrls: ['./human-resources.component.css']
})
export class HumanResourcesComponent implements OnInit {
  myEmployee: IEmployee[];
  newEmployee: IEmployee = {
    id: null,
    name: '',
    username: '',
    telephone: '',
    position: ''
  };

  addNewEmployee() {
    console.log(this.newEmployee);
    this.newEmployee.id = uuid();
    this.SEmployee.setEmployees(this.newEmployee).subscribe(myEmployee => this.myEmployee = myEmployee);
    this.newEmployee = {
      id: null,
      name: '',
      username: '',
      telephone: '',
      position: ''
    };
  }

  constructor(private SEmployee: SEmployeeService) { }

  ngOnInit() {
    this.SEmployee.getEmployees()
      .subscribe(myEmployee => this.myEmployee = myEmployee);
  }
}
