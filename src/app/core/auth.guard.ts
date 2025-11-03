import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from './auth'; // 👈 Importa sua classe Auth
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth); // Injeta seu serviço Auth
  const router = inject(Router);

  // Acessamos o BehaviorSubject internamente para obter o valor atual
  // e mapeamos o Observable para que o Router consiga usá-lo.
  return authService.isLoggedIn.pipe(
    map(isLoggedIn => {
      if (isLoggedIn) {
        return true; // Permite o acesso se logado
      } else {
        // Redireciona para a página inicial (home) se deslogado
        return router.createUrlTree(['/']);
      }
    })
  );
};
