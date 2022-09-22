import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regis: any; 

  constructor(public service: EmpService, public router: Router) { 
    this.regis = [ ];
  }

  ngOnInit(): void { 
    if (this.service.isUserLogged) {
      this.router.navigate(['/product']);
     }
   }

  register(regForm: any) {
    console.log(regForm);
    //this.regis.push(regForm);
    console.log(this.regis);
    this.service.registerUser(regForm).subscribe((result: any) => {console.log(result)});
    this.router.navigate(['/login']);

  }
}