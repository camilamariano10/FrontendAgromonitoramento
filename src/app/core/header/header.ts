import { Component, inject, signal, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Login } from '../../pages/login/login';
import { Auth } from '../auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {
  protected readonly title = signal('FrontendAgromonitoramento');
  readonly dialog = inject(MatDialog);
  readonly authService = inject(Auth); // Injeta o AuthService
  readonly router = inject(Router); // Injeta o Router


  isLoggedIn!: Observable<boolean>; // Propriedade para armazenar o Observable

  ngOnInit() {
    // Atribui o Observable do serviço à propriedade local
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Login, {
      width: '448px',
      height: '694px',
      panelClass: 'custom-modal',
    });

    // Se o modal retornar 'loginSuccess', chame o login
    dialogRef.afterClosed().subscribe(result => {
        if (result === 'loginSuccess') {
            this.authService.login();
            this.router.navigate(['/']); // Adicione a navegação após o login
        }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']); // Adicione a navegação para a home após o logout
    // Você pode adicionar uma navegação para a home aqui, usando o Router
  }


}
