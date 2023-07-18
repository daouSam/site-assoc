import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headchild',
  templateUrl: './headchild.component.html',
  styleUrls: ['./headchild.component.scss']
})
export class HeadchildComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    if (this.router.url) {
      console.log(this.router.url);  
      const resultArray = splitStringBySlash(this.router.url);
      console.log(resultArray);            
    }
  }

}

function splitStringBySlash(inputString: string): string[] {
  // Utiliser la fonction split pour séparer les mots par "/"
  const wordsArray: string[] = inputString.split('/');
  // Retourner le tableau de mots
  return wordsArray;
}
