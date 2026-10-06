import { Injectable } from '@angular/core';
import { Accaunt, Accaunts } from './accaunt';
import { log } from 'console';



@Injectable({
  providedIn: 'root',
})

export class Auth {
  constructor(private as : Accaunt) {}
  private isLoggedIn: boolean = false;

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  public login(login : string, pass : string): boolean { 
    if (this.as.getPassVer(login, pass)) {
      this.isLoggedIn = true 
      return true
    }
    this.isLoggedIn = false
    return false
  }
}
