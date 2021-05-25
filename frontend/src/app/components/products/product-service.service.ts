import { Injectable } from '@angular/core'
import { MatSnackBar } from "@angular/material/snack-bar"

// SINGLETON
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor (private snackBar: MatSnackBar) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'OK!', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
