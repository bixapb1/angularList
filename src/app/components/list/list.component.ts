import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists:any = []
  list:List | undefined 
  isSelect : number | undefined
  ngOnInit(): void {}
  constructor(private listService: ListService) {
    this.listService.getData().subscribe(data=> this.lists = data)
   }
handleList(list:List){
  this.isSelect = list.ProductId
  this.list = list
}
}
