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
  errorMessage: String;

  addNewEmployee() {
    // console.log(this.newEmployee);
    // this.newEmployee.id = uuid();
    this.SEmployee.addEmployees(this.newEmployee).subscribe(newEmployee => this.myEmployee.push(newEmployee));
    this.newEmployee = {
      id: null,
      name: '',
      username: '',
      telephone: '',
      position: ''
    };
  }
  deleteEmployee(myEmployee: Number) {
    console.log(myEmployee);
    this.SEmployee.deleteEmployee(myEmployee).subscribe();
  }

  constructor(private SEmployee: SEmployeeService) { }

  ngOnInit() {
    this.SEmployee.getEmployees()
      .subscribe(
        myEmployee => this.myEmployee = myEmployee,
        error => this.errorMessage = <any>error
      );
  }
}
