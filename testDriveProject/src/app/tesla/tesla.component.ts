import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrls: ['./tesla.component.css']
})
export class TeslaComponent implements OnInit {
  tesla: any;
  bookings: any;

  constructor(public service: EmpService, public router: Router) {

    this.bookings = [];

    this.tesla = [
      {productId: 1006, productName: 'Tesla Model S ', price: '', imagePath: 'assets/images/t2.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Tesla Model X ', price: '', imagePath: 'assets/images/img10.jpg',
      description1: 'Battery: 90.2 kWh 750 V lithium-ion', description2: 'Dimensions: 4,900 mm L x 1,766 mm W x 1,678 mm H'},

      {productId: 1006, productName: 'Tesla Model Y ', price: '', imagePath: 'assets/images/img11.jpg',
      description1: 'Battery: 92.4 kWh 850 V lithium-ion', description2: 'Dimensions: 5,000 mm L x 1,866 mm W x 1,458 mm H'},

      {productId: 1006, productName: 'Tesla Model 3 ', price: '', imagePath: 'assets/images/img13.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

    ];

    }
    ngOnInit(): void {
    }
    addToBookings(teslaproduct: any) {
      this.bookings.push(teslaproduct);
      localStorage.setItem('bookings', JSON.stringify(this.bookings));
  
      this.service.addToBookings(teslaproduct);
    }
    book(carName: any) {
      if(this.service.isUserLogged) {
      localStorage.setItem('carName', carName);
      console.log(localStorage.getItem('carName'));
      this.router.navigate(['/booking']);
      }
      else {
      this.router.navigate(['/login']);
      }
    }
  

}

