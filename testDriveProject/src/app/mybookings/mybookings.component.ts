import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  userPhone: any;
  bookings : any;
  userbookings: any;

  constructor(public service: EmpService) {
    this.userPhone="";
    this.bookings =[];
    this.userbookings=[];
   }

  ngOnInit(): void {
    this.userPhone = localStorage.getItem('userPhone');
    this.service.fetchbookings().subscribe((result: any) =>{
      result.forEach((details : any)=>{
        if(details.phone === this.userPhone){
          this.bookings.push(details);
        }

      });
    });
    console.log(this.bookings);
  }

}
