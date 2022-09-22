import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  public isUserLogged: boolean;
  public isUserAdmin: boolean;

  cartItems: any;
  productToBeAdded = new Subject();
  bookings: any;
  
  constructor(public httpClient: HttpClient) { 
    this.cartItems = [];
    this.isUserLogged = false;
    this.isUserAdmin = false;

    this.productToBeAdded = new Subject();
  }
  public setUserLoggedIn(): void {
		this.isUserLogged = true;
	}
  public setUserLoggedOut(): void {
    this.isUserLogged = false;
  }
  public getUserLogged(): any {
    return this.isUserLogged;
  }
  public addToCart(product: any) {
    this.productToBeAdded.next(product);
    this.cartItems.push(product);
  }
  getForCart() {
    return this.productToBeAdded.asObservable();
  }
 
  registerUser(user: any): any {
    return this.httpClient.post('http://localhost:3000/register', user);
  }
  registerBooking(user: any): any {
    return this.httpClient.post('http://localhost:3000/booking', user);
  }
  getAllUsers(): any {
    return this.httpClient.get('http://localhost:3000/getAllUsers');
  }
  userLogin(user: any): any {
    return this.httpClient.get('http://localhost:3000/login/' + user.emailId + '/' + user.password);
  }
  deleteUser(user: any) {
    return this.httpClient.delete('http://localhost:3000/delete/' + user.emailId);
  }
  
  addToBookings(product: any) {
    this.productToBeAdded.next(product);
    this.bookings.push(product);
  }

  getForBookings() {
    return this.productToBeAdded.asObservable();
  }
  
  getAllEmployees(): any {
    return this.httpClient.get('http://localhost:3000/getAllEmployees');
  }
  updateEmployee(employee: any): any {
    return this.httpClient.put('http://localhost:3000/update', employee);
  } 

  deleteEmployee(employee: any) {
    return this.httpClient.delete('http://localhost:3000/delete/' + employee.emailId);
  }
  fetchbookings():any { 
    return this.httpClient.get('http://localhost:3000/fetchbookings'); 
  } 

}
