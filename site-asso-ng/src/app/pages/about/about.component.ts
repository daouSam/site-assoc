import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(){}
  
  ngOnInit(): void {
    console.log("A propos")
    this.addNewItem("A propos")
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value)
  }

}
