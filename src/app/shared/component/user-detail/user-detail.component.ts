import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
userId!:string;
userObject!:Iuser
userArr!:Array<Iuser>
  constructor(private _router : Router,
    private _snackbar : SnackbarService,
    private _routes : ActivatedRoute,
    private _userservice :UsersService
  ) { 
    this._routes.data
    .subscribe(res => {
      this.userObject=res['user']
      this.userId=this.userObject.userId
     
      
    })
  }

  ngOnInit(): void {
  //  this.getsingleuservalue()
this._userservice.FetchUser()
.subscribe({
  next:data=> {
    this.userArr=data
  }
})

  }

  oneditform(){
    this._router.navigate(['/user', this.userId,'edit'],{queryParamsHandling:'preserve'})
  }





  getsingleuservalue(){
     this._routes.params
    .subscribe((param:Params) => {
      this.userId=param['id']
      if(this.userId){
       this._userservice.fetchById(this.userId)
       .subscribe({
        next:data=> {
         this.userObject=data
         
        }
       })
      }
    })
  }


  onremove(userid:string){
   this._userservice.userremove(userid)
   .subscribe({
    next:data=>{
     
      this._snackbar.opensnackbar(data.msg)
    this._router.navigate(['/user',this.userArr[0].userId],
     {
      queryParams:{
        cr:this.userArr[0].userRole
      }
     }
      
    )
    }
   })
  }

}
