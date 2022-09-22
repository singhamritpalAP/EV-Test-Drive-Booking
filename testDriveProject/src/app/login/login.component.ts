import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	id: String;
	pass: String;
	//flag: number;
	dbPassword: any;
	user: any;
	userName: any;
	userAddress: any;
	userPhone: any;
	userEmail: any;

  constructor(public service: EmpService, public router: Router) {
  		this.id =  "";
  		this.pass = "";
		//this.flag = 0;
		this.user = [];
		   
   }

  ngOnInit(): void {
	if (this.service.isUserLogged) {
		this.router.navigate(['/product']);
	 }
  }
	
	 submitForm(loginForm: any){

		if(loginForm.emailId === 'admin@gmail.com' && loginForm.password === 'admin123') {
			this.service.isUserAdmin = true;
			this.service.setUserLoggedIn();
			this.router.navigate(['showUser']);
		}
		else
			{

		 this.service.userLogin(loginForm).subscribe((result: any) =>{this.dbPassword = result.password; this.userName = result.name; this.userAddress = result.address; this.userPhone = result.phone; this.userEmail = result.emailId});

		 this.service.userLogin(loginForm).subscribe((result: any) => setTimeout(() => { this.user = JSON.stringify(result) },500));

				
	setTimeout(() => {if(this.dbPassword == null) alert("Invalid Login Credentials");	else { ( loginForm.password === this.user.password) 
						this.service.setUserLoggedIn();
						this.router.navigate(['product']);
						//console.log(this.user);
						console.log("logged in");
						//console.log(this.userAddress);
						localStorage.setItem('userName', this.userName);
						localStorage.setItem('userAddress', this.userAddress);
						localStorage.setItem('userPhone', this.userPhone);
						localStorage.setItem('userEmail', this.userEmail);
						localStorage.setItem('user', JSON.stringify(this.user));
					}}, 1000);

	}}
	
}
