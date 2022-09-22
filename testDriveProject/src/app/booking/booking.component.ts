import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  regis: any; 
  carName: any;
  userName: any;
  userAddress: any;
  userPhone: any;
  userEmail: any;

  constructor(public service: EmpService, public router: Router) { 
    this.regis = [ ];

    this.carName = localStorage.getItem('carName');
    this.userName = localStorage.getItem('userName');
    this.userAddress = localStorage.getItem('userAddress');
    this.userPhone = localStorage.getItem('userPhone');
    this.userEmail = localStorage.getItem('userEmail');

  }

  ngOnInit(): void {
  }
  register(regForm: any) {
    //console.log(regForm.time);
    //this.regis.push(regForm);
    //console.log(this.regis);
    this.service.registerBooking(regForm).subscribe((result: any) => {console.log(result)});
    alert("Test Drive Booked");
    this.router.navigate(['product'])
  }
}
