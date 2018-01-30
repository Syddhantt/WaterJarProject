import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/http.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {
  constructor(private httpService: HttpService) { }
  ngOnInit(){
    this.loadItem();
  }
  item = [];

  loadItem(){
    this.httpService.getItemData().subscribe(data => this.item=data);
    
  }

}
  


