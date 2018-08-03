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
  newEmployee: IEmployee = {
    id: null,
    name: '',
    username: '',
    telephone: '',
    position: ''
  };
  errorMessage: String;

  addNewEmployee() {
    this.SEmployee.addEmployees(this.newEmployee).subscribe(newEmployee => this.myEmployee.push(newEmployee));
    this.newEmployee = {
      id: null,
      name: '',
      username: '',
      telephone: '',
      position: ''
    };
  }

  deleteEmployee(employeeId: Number) {
    this.SEmployee.deleteEmployee(employeeId).subscribe(
      myEmployee => this.removeEmployee(myEmployee),
      errorMessage => this.showError()
    );
  }
  removeEmployee(emp){
    const index = this.myEmployee.findIndex(function(o) {
      return o.id === emp;
    });
    this.myEmployee.splice(index, 1);
  }
  showError() {
    alert('There was an error, the Employee may have been already deleted, refresh your page');
    this.getEmployees();
  }

  constructor(private SEmployee: SEmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees() {
    this.SEmployee.getEmployees()
      .subscribe(
        myEmployee => this.myEmployee = myEmployee,
        error => this.errorMessage = <any>error
    );
  }
}
