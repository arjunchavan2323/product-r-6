import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackbarser : MatSnackBar) { }

  opensnackbar(msg:string){
    this._snackbarser.open(msg,'Closed', {
      duration:2000,
      verticalPosition:'top',
      horizontalPosition:'left'
    })
  }
}
