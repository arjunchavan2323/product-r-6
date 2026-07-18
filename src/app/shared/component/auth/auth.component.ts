import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
AllreadyHaveaccount:boolean=false
loginform!:FormGroup
signupform!:FormGroup
  constructor(private _authservice : AuthService,
    private _snackbarservice : SnackbarService,
    private _router :Router
  ) { }

  ngOnInit(): void {
    this.createlogin()
   this.createsignupform()
  }

  createlogin(){
    this.loginform=new FormGroup({
      email:new FormControl(null, Validators.required),
      password:new FormControl(null, Validators.required)
    })
  }

  createsignupform(){
   this.signupform=new FormGroup({
    email:new FormControl(null, Validators.required),
    password:new FormControl(null, Validators.required),
    userRole:new FormControl('admin')
   })
  }


  onsubmit(){
    if(this.loginform.invalid){
      this.loginform.markAllAsTouched()
    }else{
      let logindetail=this.loginform.value
        this._authservice.LogInform(logindetail)
        .subscribe({
          next:data=> {
          this._snackbarservice.opensnackbar(data.message)
            // console.log(data);
            this._authservice.saveToken(data.token)
            this._authservice.saveuserole(data.userRole)
            this._router.navigate(['/home'])
          },error:err=> {
          this._snackbarservice.opensnackbar(err.error.message)

          }
        })
    }
  }


  onsiup(){
    if(this.signupform.invalid){
      this.signupform.markAllAsTouched()
    }else{
      let usersign=this.signupform.value
      this._authservice.Signupform(usersign)
      .subscribe({
        next:data=> {
          console.log(data);
          
          this._snackbarservice.opensnackbar(data.message)
           this.AllreadyHaveaccount=true
        },error:err=> {
          console.log(err);
          
          this._snackbarservice.opensnackbar(err.error.message)

        }
      })
    }
  }



}
