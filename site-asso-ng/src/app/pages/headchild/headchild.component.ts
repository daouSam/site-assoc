import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headchild',
  templateUrl: './headchild.component.html',
  styleUrls: ['./headchild.component.scss']
})
export class HeadchildComponent implements OnInit{
  selectedImage: string = '';
  backgroundImage!: string;
  constructor(private router: Router, private elemenref: ElementRef){}
  titre: string = "services"
  ngOnInit(): void {
    if (this.router.url) { 
      const resultArray = splitStringBySlash(this.router.url);
      console.log(resultArray);            
    }
    const randomIndex: number = Math.floor(Math.random() * this.images.length);
    this.selectedImage = this.images[randomIndex];
    this.backgroundImage = `linear-gradient(rgba(0, 29, 35, .8), rgba(0, 29, 35, .8)), url('${this.selectedImage}') center center / cover no-repeat`
  }

  images: string[] = [
    "assets/img/dounkafa.png",
    "assets/img/semence.jpg",
    "assets/img/soprasa.jpg",
    "assets/img/agrisahel.jpg",
    "assets/img/keitala.jpg",
    "assets/img/orientagri.jpg",
    "assets/img/agrotropic.jpg"
  ];

}

function splitStringBySlash(inputString: string): string[] {
  // Utiliser la fonction split pour séparer les mots par "/"
  const wordsArray: string[] = inputString.split('/');
  // Retourner le tableau de mots
  return wordsArray;
}


