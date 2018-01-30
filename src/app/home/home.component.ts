import { Component } from '@angular/core';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private httpService: HttpService) { }

  customer = {};

  loadCustomer(){
    this.httpService.getCustomerData().subscribe(data => this.customer=data);
  }

}
