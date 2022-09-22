import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
//import { HeaderComponent } from '../header/header.component';

@Component({
  //providers: [HeaderComponent],
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public service: EmpService, public router: Router) {
    this.service.isUserLogged = false;
    localStorage.clear();
    this.router.navigate(['login']);
   }

  ngOnInit(): void {
  }
  logout() {
    this.service.isUserLogged = false;
    localStorage.clear();
    this.router.navigate(['login']);
    location.reload();
    
  }

}
