import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/component/home/home.component";
import { ProductDashboardComponent } from "./shared/component/product-dashboard/product-dashboard.component";
import { ProductFormComponent } from "./shared/component/product-form/product-form.component";
import { ProductDetailComponent } from "./shared/component/product-detail/product-detail.component";
import { UserDashboardComponent } from "./shared/component/user-dashboard/user-dashboard.component";
import { UserDetailComponent } from "./shared/component/user-detail/user-detail.component";
import { UserFormComponent } from "./shared/component/user-form/user-form.component";
import { FairsDashboarComponent } from "./shared/component/fairs-dashboar/fairs-dashboar.component";
import { FairsDetailComponent } from "./shared/component/fairs-detail/fairs-detail.component";
import { AuthComponent } from "./shared/component/auth/auth.component";
import { authguard } from "./shared/component/guards/auth.guard";
import { UseroleGuard } from "./shared/component/guards/userole.guard";
import { candiactivated } from "./shared/component/guards/candiactivated";
import { useroleguard } from "./shared/component/guards/userRole.guard";
import { productresolve } from "./shared/component/guards/product.resolve";




const routes:Routes=[
    {
        path:'', component:AuthComponent
    },
    {
        path:'home', component:HomeComponent
    },
    
    {
        path:'product', component:ProductDashboardComponent,
        canActivate:[authguard, UseroleGuard],
        data:{
            userRole:['admin', 'buyer', 'superAdmin']
        },
        resolve:{
            product:productresolve
        },
        
        children:[
            {
                path:'addproduct', component:ProductFormComponent
            },
            {
                path:':id', component:ProductDetailComponent,
                 resolve:{
            product:productresolve
        },
            },
             {
                path:':id/edit', component:ProductFormComponent,
                canDeactivate:[candiactivated]
            }

        ]
    },
    {
        path:'user', component:UserDashboardComponent,
           canActivate:[authguard, UseroleGuard],
           data:{
            userRole:[ 'admin', 'buyer', 'superAdmin']
        },
        resolve:{
            user:useroleguard
        },

        children:[

            {
                path:'adduser', component:UserFormComponent
            },
            {
                path:':id', component:UserDetailComponent,
                  resolve:{
            user:useroleguard
        },
            },
            {
                path:':id/edit', component:UserFormComponent,
                 canDeactivate:[candiactivated]
            }
        ]
    },
    {
        path:'fairs', component:FairsDashboarComponent,
        canActivate:[authguard, UseroleGuard],
        data:{
            userRole:['superAdmin']
        },
        children:[
            {
                path:':id', component:FairsDetailComponent
            }
        ]
    }

]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})






export class approutingmodule{

}