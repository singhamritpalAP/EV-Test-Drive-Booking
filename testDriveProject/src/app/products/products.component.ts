import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  cartItems: any;

  constructor(public empService: EmpService, public router: Router) {
    this.products = [ 
    {productName: 'tesla',imagePath: 'assets/images/10001.jpg', description: 'Tesla, Inc. is an American multinational automotive and clean energy company headquartered in Austin, Texas. '}, 
    {productName: 'bmw', imagePath: 'assets/images/10002.jpg', description: 'BMW is a German multinational manufacturer of performance luxury vehicles and motorcycles headquartered in Munich.'}, 
    {productName: 'bugatti', imagePath: 'assets/images/10003.jpg', description: 'Automobiles Ettore Bugatti was a German then French manufacturer of high-performance automobiles.'},
    {productName: 'lambo',  imagePath: 'assets/images/10004.jpg', description: 'Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars.'}, 
    {productName: 'mercedes', imagePath: 'assets/images/10005.jpg', description: 'Mercedes-Benz, commonly referred to as Mercedes and sometimes as Benz, is a German luxury automotive brand'}, 
    {productName: 'porsche',  imagePath: 'assets/images/10006.jpg', description: 'Porsche, is a German automobile manufacturer specializing in high-performance sports cars, headquartered in Stuttgart.'}
  ]; 
  this.cartItems = [];
   }

  ngOnInit(): void {
  }
 
    book(car: any){
      console.log(car);
      this.router.navigate([car]);
    }
}
