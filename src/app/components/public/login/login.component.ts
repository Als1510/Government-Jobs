import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { Login } from '../../../helpers/class'
import { TokenStorageService } from '../../../services/token-storage.service'
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new Login('', '');
  isLoggedIn = false;
  isLoginFailed = false;
  msgClass = 'danger';
  msg: '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.authService.login(this.login).subscribe(
      data=>{
        this.msg = data.msg;
        this.tokenStorage.saveToken(data.token);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.msgClass = 'success'
      },
      err=> {
        this.msg = err.error.msg;
        this.isLoginFailed = true;
      }
    )
    this.showAlert();
  }

  showAlert() {
    setTimeout(()=>{
      if(this.isLoggedIn == true) {
        this.router.navigate(['/dashboard'])
      }
      this.msg=''
    }, 3000);
  }
}
