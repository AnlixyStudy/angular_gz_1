import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { CanActivate, Route } from '@angular/router';
import { Auth } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  if (auth.isAuthenticated()) {return true}
  else {alert("Стоп! Доступ закрыт")
    router.navigate(['/login']);
    return false;
  }
};
