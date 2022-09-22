import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.css']
})
export class PorscheComponent implements OnInit {

  porsche: any;
  bookings: any;

  constructor(public service: EmpService, public router: Router) {

    this.bookings = [];

    this.porsche = [
      {productId: 1006, productName: 'Porsche 911 Turbo S ', price: '', imagePath: 'assets/images/p1.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H' },

      {productId: 1006, productName: 'Porsche 911 GT2 RS ', price: '', imagePath: 'assets/images/p3.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Porsche Taycan Turbo S', price: '', imagePath: 'assets/images/p3.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

    ];

    }
    ngOnInit(): void {
    }
    addToBookings(porscheproduct: any) {
      this.bookings.push(porscheproduct);
      localStorage.setItem('cartItems', JSON.stringify(this.bookings));
  
      this.service.addToBookings(porscheproduct);
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


