import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
 


  
  


 
})
export class UserDashboardComponent implements OnInit {
userArr!:Array<Iuser>
  constructor(private _userservice : UsersService,
    private _router :Router,
    private _routes : ActivatedRoute
  ) { 
    this.userArr=this._routes.snapshot.data['user']
  }

  ngOnInit(): void {
    // this._userservice.FetchUser()
    // .subscribe({
    //   next:data=> {
    //     this.userArr=data
    //     this._router.navigate(['user', this.userArr[0].userId])
    
    //   }
    // })
  }

  trackuser(index:number, use:Iuser){
    return use.userId
  }

}
