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
      if (result && result.status === 'loginSuccess') {
        console.log('✅ Login bem-sucedido. Iniciando o processo de login...');

        // Chama o método de login para atualizar o estado do AuthService
        this.authService.login(result.email, result.password);

        // Recupera o tipo de usuário salvo no localStorage
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        //console.log('🔑 Usuário logado:', userData);

        // Redireciona de acordo com o tipo do usuário
        if (userData.tipo === 'business') {
          this.router.navigate(['/dashboard-pj']);
        } else if (userData.tipo === 'individual') {
          this.router.navigate(['/dashboard-individual']);
        } else {
          console.warn('⚠️ Tipo de usuário não reconhecido:', userData);
        }
      }
  });
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']); // Adicione a navegação para a home após o logout
    // Você pode adicionar uma navegação para a home aqui, usando o Router
  }


}
