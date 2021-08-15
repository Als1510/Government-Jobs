import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { TokenStorageService } from '../../../services/token-storage.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.tokenStorage.getToken()) {
        this.isLoggedIn=true;
      }
    }, 1000)
  }
  
  logout() {
    this.tokenStorage.signout();
    this.isLoggedIn = false;
    this.router.navigate(['/home'])
  }
}
