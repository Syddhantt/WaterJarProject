import { Component , OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
  constructor(private httpService: HttpService) { }
  ngOnInit(){
    this.loadArea();
  }
  area = [];

  loadArea(){
    this.httpService.getAreaData().subscribe(data => this.area=data);
    
  }

  onSubmit(form:NgForm){
    this.httpService.setCustomerData(form.value).subscribe()
  }
}
