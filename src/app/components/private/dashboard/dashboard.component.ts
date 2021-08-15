import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { TokenStorageService } from '../../../services/token-storage.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    if(this.tokenStorage.getToken() === null) {
      this.router.navigate(['/home'])
    }
  }
  
}
