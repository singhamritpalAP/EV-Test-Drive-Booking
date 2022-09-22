import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent implements OnInit {
  bmw: any;
  bookings: any;

  constructor(public service: EmpService, public router: Router) {

    this.bookings = [];

    this.bmw = [
      {productId: 1006, productName: 'BMW i4 ', price: '', imagePath: 'assets/images/img14.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'BMW i7 ', price: '', imagePath: 'assets/images/img15.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'BMW IX', price: '', imagePath: 'assets/images/img17.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

    ];

    }
  ngOnInit(): void {
  }
  addToBookings(bmwproduct: any) {
    this.bookings.push(bmwproduct);
    localStorage.setItem('cartItems', JSON.stringify(this.bookings));

    this.service.addToBookings(bmwproduct);
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