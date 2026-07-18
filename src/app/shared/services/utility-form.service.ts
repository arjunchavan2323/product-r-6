
import { Injectable } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilityFormService {

  constructor() { }


  formaddcntrlpatchcntrl(dataArr:Array<string>, formarr:FormArray ){
    formarr.clear()
     dataArr.forEach(val => {
      let cntrl=new FormControl(val, Validators.required)
      formarr.push(cntrl)
     })
  }

}
