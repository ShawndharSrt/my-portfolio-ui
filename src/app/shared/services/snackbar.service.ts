import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {

  }

  show(message: string, action: string = 'Close', config: MatSnackBarConfig = {}) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar', 'success', 'error', 'info', 'warning'],
    });
  }

  success(message: string) {
    this.show(message, '✔️', {
      panelClass: ['snackbar-success']
    });
  }

  error(message: string) {
    this.show(message, '❌', {
      panelClass: ['snackbar-error']
    });
  }

  info(message: string) {
    this.show(message, 'ℹ️', {
      panelClass: ['snackbar-info']
    });
  }

  warning(message: string) {
    this.show(message, '⚠️', {
      panelClass: ['snackbar-warning']
    });
  }

}
