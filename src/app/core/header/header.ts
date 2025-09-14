import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Login } from '../../pages/login/login';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
<<<<<<< HEAD
  styleUrls: ['./header.css'],
=======
  styleUrls: ['./header.css']
>>>>>>> main
})
export class Header {
  protected readonly title = signal('FrontendAgromonitoramento');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(Login, {
      width: '448px',
      height: '694px',
      panelClass: 'custom-modal',
    });
  }
}
