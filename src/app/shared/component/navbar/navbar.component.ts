import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authservice : AuthService,
    private _router : Router,
    private _snackbar :SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onlogout(){
    this._authservice.logout()
    .subscribe({
      next:data=> {
        this._snackbar.opensnackbar(data.msg)
        this._router.navigate(['/'])
      }
    })


  }

}
