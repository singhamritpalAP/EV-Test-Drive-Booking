import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
declare var jQuery: any;

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  employees: any; 
  loginId: any;
  employee: any;
  retreivedData: any;
  editObject: any;
  constructor(public service: EmpService) { 
    this.loginId = '';

    this.editObject = {name:'', emailId:'',
    address:'',  password:''};
  }

  ngOnInit(): void {
    if(this.service.isUserAdmin)
    this.service.getAllEmployees().subscribe((result: any) => {this.employees = result;});
  }
  showUser() {
    this.retreivedData = localStorage.getItem('employee');
    this.employee = JSON.parse(this.retreivedData);
    this.loginId = this.employee.loginId;
    localStorage.clear();
  }
  editEmp(employee: any) {
    this.editObject = employee;
    jQuery('#empModel').modal('show');  
  }
  updateEmployee() {
    console.log(this.editObject);
    this.service.updateEmployee(this.editObject).subscribe((result: any) => {console.log(result)});
  }

  deleteEmployee(employee: any) {
    this.service.deleteEmployee(employee).subscribe((result: any) => {
      const i = this.employees.findIndex((element: any) => {
        return element.empId === employee.empId;
      });
      this.employees.splice(i, 1);
    });
  }

}
