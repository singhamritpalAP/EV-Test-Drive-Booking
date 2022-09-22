import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-lambo',
  templateUrl: './lambo.component.html',
  styleUrls: ['./lambo.component.css']
})
export class LamboComponent implements OnInit {

  lambo: any;
  bookings: any;

  constructor(public service: EmpService, public router: Router) {

    this.bookings = [];

    this.lambo = [
      {productId: 1006, productName: 'Lamborghini Aventador', price: '', imagePath: 'assets/images/l1.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Lamborghini Sian', price: '', imagePath: 'assets/images/l3.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

    ];

    }
    ngOnInit(): void {
    }
    addToBookings(lamboproduct: any) {
      this.bookings.push(lamboproduct);
      localStorage.setItem('cartItems', JSON.stringify(this.bookings));
  
      this.service.addToBookings(lamboproduct);
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