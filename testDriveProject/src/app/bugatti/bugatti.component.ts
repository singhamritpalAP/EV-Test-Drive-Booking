import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-bugatti',
  templateUrl: './bugatti.component.html',
  styleUrls: ['./bugatti.component.css']
})
export class BugattiComponent implements OnInit {
  bugatti: any;
  bookings: any;

  constructor(public service: EmpService, public router: Router) {

    this.bookings = [];

    this.bugatti = [
      {productId: 1006, productName: 'Bugatti Chiron', price: '', imagePath: 'assets/images/img19.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

      {productId: 1006, productName: 'Bugatti Divo', price: '', imagePath: 'assets/images/img20.jpg',
      description1: 'Battery: 93.4 kWh 800 V lithium-ion', description2: 'Dimensions: 4,963 mm L x 1,966 mm W x 1,378 mm H'},

    ];

    }
    ngOnInit(): void {
    }
    addToBookings(bugattiproduct: any) {
      this.bookings.push(bugattiproduct);
      localStorage.setItem('cartItems', JSON.stringify(this.bookings));
  
      this.service.addToBookings(bugattiproduct);
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





