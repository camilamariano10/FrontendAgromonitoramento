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

  goToDashboard() {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  console.log('goToDashboard - UserData:', userData);

  if (userData.tipo === 'business') {
    this.router.navigate(['/dashboard-pj']);
    } else if (userData.tipo === 'individual') {
      this.router.navigate(['/dashboard-individual']);
    } else {
      console.warn('Tipo de usuário não encontrado. Redirecionando para home.');
      this.router.navigate(['/']);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Login, {
      width: '448px',
      height: '694px',
      panelClass: 'custom-modal',
    });

    // Se o modal retornar 'loginSuccess', chame o login
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Modal fechado com result:', result); // Log para debugar

      if (result && result.status === 'loginSuccess') {
        setTimeout(() => {
          const userData = JSON.parse(localStorage.getItem('userData') || '{}');
          // redirect code here
        }, 500);
        console.log('✅ Login bem-sucedido. Redirecionando...');

        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        console.log('🔑 UserData:', userData);

        if (userData.tipo === 'business') {
          this.router.navigate(['/dashboard-pj']);
        } else if (userData.tipo === 'individual') {
          this.router.navigate(['/dashboard-individual']);
        } else {
          console.warn('⚠️ Tipo de usuário não reconhecido:', userData.tipo);
          this.router.navigate(['/']); // Fallback
        }
      } else {
        console.warn('Modal fechado sem loginSuccess');
      }
    });
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']); // Adicione a navegação para a home após o logout
    // Você pode adicionar uma navegação para a home aqui, usando o Router
  }


}
