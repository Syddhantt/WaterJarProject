import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { routing } from 'app/app.routing';
import { ItemComponent } from './item/item.component';
import { AreaComponent } from './area/area.component';
import { HttpService } from 'app/http.service';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    ItemComponent,
    AreaComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,routing
  ],  
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
