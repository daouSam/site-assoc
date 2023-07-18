import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicec',
  templateUrl: './servicec.component.html',
  styleUrls: ['./servicec.component.scss']
})
export class ServicecComponent implements OnInit{

  constructor(){}
  
  ngOnInit(): void {
    console.log("servicec");    
  }

}
