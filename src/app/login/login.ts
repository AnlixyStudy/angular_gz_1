import { Component, inject } from '@angular/core';
import { Auth } from '../auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
})
export class Login {
  constructor(private auth: Auth) {} 

  login = ''
  pass = ''
  err = ''

  onLoginClick() : void {
    
    if (this.auth.login(this.login, this.pass)) alert("Вы успешно вошли!")
    else alert("Не верно введены данные(((")
  }
}
