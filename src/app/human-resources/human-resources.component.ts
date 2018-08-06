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
  currEmployee: IEmployee = {
    id: null,
    name: '',
    username: '',
    telephone: '',
    position: ''
  };
  newEmployee: IEmployee = {
    id: null,
    name: '',
    username: '',
    telephone: '',
    position: ''
  };
  errorMessage: String = 'Everything OK';
  displayError: String = 'none';

  editEmployee(employeeId: Number) {
    const index = this.myEmployee.findIndex(function(o) {
      return o.id === employeeId;
    });
    this.currEmployee = this.myEmployee[index];
    console.log(this.currEmployee);
  }
  updateEmployee() {
    this.SEmployee.updateEmployee(this.currEmployee).subscribe(currEmployee => {
      const index = this.myEmployee.findIndex(function(o) {
        return o.id === currEmployee.id;
      });
      this.myEmployee[index] = currEmployee;
    },
    errorMessage => this.showError('Error: The employee you edited doesn\'t exist, page will be refreshed'));
  }

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
      errorMessage => this.showError('Error: There was an error, the Employee may have been already deleted, page will be refreshed')
    );
  }
  removeEmployee(emp) {
    const index = this.myEmployee.findIndex(function(o) {
      return o.id === emp;
    });
    this.myEmployee.splice(index, 1);
  }
  showError(error: String) {
    this.errorMessage = error;
    this.displayError = 'block';
    setTimeout( () => { this.displayError = 'none'; }, 5000 );
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
