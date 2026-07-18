import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs';
import { FairsService } from '../../services/fairs.service';

@Component({
  selector: 'app-fairs-dashboar',
  templateUrl: './fairs-dashboar.component.html',
  styleUrls: ['./fairs-dashboar.component.scss']
})
export class FairsDashboarComponent implements OnInit {
fairsArr!:Array<Ifairs>
  constructor(private _faiserservice : FairsService) { }

  ngOnInit(): void {
    this._faiserservice.Fetchfairs()
    .subscribe({
      next:data=> {
        this.fairsArr=data
      },
      error:err=> {
        console.log(err);
        
      }
    })
  }

}
