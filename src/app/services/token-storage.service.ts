import { Injectable } from '@angular/core';

const TOKEN_KEY = 'x-auth-token'

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  constructor() { }

  signout(): void{
    localStorage.removeItem(TOKEN_KEY);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
}