import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs';
import { ActivatedRoute, Params } from '@angular/router';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fairs-detail',
  templateUrl: './fairs-detail.component.html',
  styleUrls: ['./fairs-detail.component.scss']
})
export class FairsDetailComponent implements OnInit {
  fairId!:string;
  fairobject!:Ifairs
  constructor(private _routes : ActivatedRoute,
    private _fairservice : FairsService
  ) { }

  ngOnInit(): void {
    this._routes.params
    .subscribe((param:Params) => {
      this.fairId=param['id']
      if(this.fairId){
        this._fairservice.FeatchfairsByID(this.fairId)
        .subscribe({
          next:data=> {
            this.fairobject=data
          }
        })
      }
    })
  }

}
