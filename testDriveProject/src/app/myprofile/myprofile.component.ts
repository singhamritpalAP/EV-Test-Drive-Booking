import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  emailId: any;
  user: any;
  userEmail: any;
  userName: any;
  userAddress: any;
  userPhone: any;
  retreivedData: any;
  constructor(public service: EmpService) {
    this.userEmail = localStorage.getItem('userEmail');
    this.userName = localStorage.getItem('userName');
    this.userAddress = localStorage.getItem('userAddress');
    this.userPhone = localStorage.getItem('userPhone');

   }

  ngOnInit(): void {
  }

}
