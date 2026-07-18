import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsDashboarComponent } from './fairs-dashboar.component';

describe('FairsDashboarComponent', () => {
  let component: FairsDashboarComponent;
  let fixture: ComponentFixture<FairsDashboarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsDashboarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsDashboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
