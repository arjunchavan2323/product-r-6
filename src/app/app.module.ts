import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule  } from "@angular/material/button";
import {MatCardModule  } from "@angular/material/card";
import {MatIconModule  } from "@angular/material/icon";
import {MatSnackBarModule  } from "@angular/material/snack-bar";
import {MatDialogModule  } from "@angular/material/dialog";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductDetailComponent } from './shared/component/product-detail/product-detail.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HomeComponent } from './shared/component/home/home.component';
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { approutingmodule } from './app-routing.module';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { UserDetailComponent } from './shared/component/user-detail/user-detail.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { MatChipsModule } from "@angular/material/chips";
import { FairsDashboarComponent } from './shared/component/fairs-dashboar/fairs-dashboar.component';
import { FairsDetailComponent } from './shared/component/fairs-detail/fairs-detail.component';
import { FairsCardComponent } from './shared/component/fairs-card/fairs-card.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    ProductDetailComponent,
    ProductFormComponent,
    NavbarComponent,
    HomeComponent,
    UserDashboardComponent,
    UserDetailComponent,
    UserFormComponent,
    FairsDashboarComponent,
    FairsDetailComponent,
    FairsCardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    approutingmodule,
    MatChipsModule,
    HttpClientModule

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
