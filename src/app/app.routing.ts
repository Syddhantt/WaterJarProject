import { Routes } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { CustomerComponent } from "app/customer/customer.component";
import { RouterModule } from "@angular/router/src/router_module";
import { ItemComponent } from "app/item/item.component";
import { AreaComponent } from "app/area/area.component";
import { TransactionComponent } from "app/transaction/transaction.component";

const APP_ROUTES: Routes =[
    { path: '',component:HomeComponent },
    { path: 'customer',component:CustomerComponent },
    { path: 'item',component:ItemComponent },
    { path: 'area',component:AreaComponent },
    { path: 'transaction',component:TransactionComponent }
];
    
export const routing = RouterModule.forRoot(APP_ROUTES);