import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UtilityFormService } from '../../services/utility-form.service';
import { iCanDeactivate } from '../../model/candiactivated';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, iCanDeactivate {
userForm!:FormGroup
userid!:string;
userdetail!:Iuser
isineditmode : boolean =false
disableupdatebtn:boolean=false
  constructor(private _userservice :UsersService,
    private _snackbar : SnackbarService,
    private _router : Router,
    private _routes : ActivatedRoute,
    private _utilityservice :UtilityFormService
  ) { }

  ngOnInit(): void {
 this.createuserform()
 this.addcontrol()
this.permananthandler()
this.isaddsamehandler()
this.userid=this._routes.snapshot.paramMap.get('id')!
if(this.userid){
  this._userservice.fetchById(this.userid)
  .subscribe({
    next:data=> {
      this.isineditmode=true
      this.userdetail=data;
      
      this.userForm.patchValue(data)

      this._utilityservice.formaddcntrlpatchcntrl(data.skills, this.skillformArr)
      this.formcontrol['address'].get('current')?.valid
      this.formcontrol['isAddSame'].enable()
      this.formcontrol['address'].get('permanent')?.patchValue(this.userdetail.address.permanent)

    },error:err=> {
      console.log(err);
      
    }
  })
}

// this._routes.queryParams
// .subscribe(res => {
//   if(res['cr']=='admin'){
//     this.userForm.disable()
    
   
//   }else{
//     this.userForm.enable()
//   }
// })

this._routes.queryParams
.subscribe((myparam:Params) => {
 if(myparam['cr']==='admin'){
  this.userForm.disable()
  this.disableupdatebtn=true
 }else{
    this.userForm.enable()
  this.disableupdatebtn=false

 }
})


  }

  isaddsamehandler(){
    this.formcontrol['isAddSame'].valueChanges
.subscribe(val => {
  if(val){
  let peraddvalue=this.formcontrol['address'].get('current')?.value
  this.formcontrol['address'].get('permanent')?.patchValue(peraddvalue)
  this.formcontrol['address'].get('permanent')?.disable()
  }else if(this.isineditmode && !val){
   
        this.formcontrol['address'].get('permanent')?.patchValue(this.userdetail.address.permanent)
        this.formcontrol['address'].get('permanent')?.enable()

  }
  else{
    this.formcontrol['address'].get('permanent')?.reset()
    this.formcontrol['address'].get('permanent')?.enable()

  }
})
  }

  permananthandler(){
     this.formcontrol['address'].get('current')?.valueChanges
 .subscribe(res => {
  if(this.formcontrol['address'].get('current')?.valid){
  this.formcontrol['isAddSame'].enable()
 }else{
   this.formcontrol['isAddSame'].disable()
    this.formcontrol['isAddSame'].reset()
 }
 })
  }

  createuserform(){
       this.userForm=new FormGroup({
      userName:new FormControl(null, Validators.required),
    userRole:new FormControl('admin'),
 profileDescription:new FormControl(null, Validators.required),
profileImage:new FormControl(null, Validators.required),

experienceYears:new FormControl(null, Validators.required),

isActive:new FormControl(null, Validators.required),
isAddSame:new FormControl({value:null, disabled:true}),
 skills:new FormArray([]),
address:new FormGroup({
  current:new FormGroup({
    city:new FormControl(null, Validators.required),
    state:new FormControl(null, Validators.required),
    country:new FormControl('India'),
    zipcode:new FormControl(null, Validators.required)
  }),
  permanent:new FormGroup({
    city:new FormControl(null, Validators.required),
    state:new FormControl(null, Validators.required),
    country:new FormControl('India'),
    zipcode:new FormControl(null, Validators.required)
  })
 
})
    })
  }


  get formcontrol(){
   return this.userForm.controls
  }

  get skillformArr(){
    return this.formcontrol['skills'] as FormArray
  }

  addcontrol(){
   if(this.skillformArr.valid && this.skillformArr.length < 5){
     let inputc=new FormControl(null, Validators.required)
    this.skillformArr.push(inputc)
   }
  }
  onusersubmit(){
   if(this.userForm.invalid){
    this.userForm.markAllAsTouched()
   }else{
    let UsersDetails:Iuser={
      ...this.userForm.getRawValue(),
      userId:Date.now().toString()
    }
    this._userservice.createaddusers(UsersDetails)
    .subscribe({
      next:data=> {
        this._snackbar.opensnackbar(data.msg)
        this._router.navigate(['/user', this.userdetail.userId])
      },error:err=> {
        console.log(err);
        
      }
    })
   }
  }


  onupdate(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched()
    }else{
      let updated_user:Iuser={
        ...this.userForm.value,
        userId:this.userdetail.userId
      }
      this._userservice.userupdated(updated_user)
      .subscribe({
        next:data=> {
          this.userForm.reset()
          this.isineditmode=false
          this._snackbar.opensnackbar(data.msg)
       this._router.navigate(['/user',updated_user.userId],{
        queryParams:{
          cr:this.userdetail.userRole
        }
       }
        
       )
        },
        error:err=> {
          this._snackbar.opensnackbar(err)

        }
      })
    }
  }

  onremove(i:number){
    this.skillformArr.removeAt(i)
  }

  CanDeactivate () {
    if(this.userForm.dirty && this.isineditmode){
      let getconformation=confirm('Are u sure discart changes give me the ')
    return getconformation
    }
    return true
  }
  

}
