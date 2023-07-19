import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(){}
  
  ngOnInit(): void {
    console.log("accueil");    
  }

  entreprises: Entreprise[] = [
    {
     nomentr: "DOUN KA FA SARL" ,
     image: "assets/img/dounkafa.png",
     description: "Avec Doukafa kôgô djôrô banan",
     adresse: "Koulikoro, Moribabougou",
     contact: "75 90 68 07",
     site: "http://www.dounkafa.ml"
    },
    {
     nomentr: "CAMARA SEMENCES SARL" ,
     image: "assets/img/semence.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus justo, viverra quis euismod tincidunt, hendrerit ac felis",
     adresse: "Kassebougou, Baguinda",
     contact: "75 05 28 87",
     site: "string"
    },
    {
     nomentr: "SOPROSA SARL" ,
     image: "assets/img/soprasa.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus justo, viverra quis euismod tincidunt, hendrerit ac felis",
     adresse: "Sikasso, Sanoubougoula",
     contact: "76 39 32 70",
     site: "string"
    },
    {
     nomentr: "AGRI SAHEL SARL" ,
     image: "assets/img/agrisahel.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus justo, viverra quis euismod tincidunt, hendrerit ac felis",
     adresse: "Segou, Hamdallaye",
     contact: "76 60 40 00",
     site: "string"
    },
    {
     nomentr: "KEITALA NEGOCE SARL" ,
     image: "assets/img/keitala.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus justo, viverra quis euismod tincidunt, hendrerit ac felis",
     adresse: "Sikasso, Mancourani",
     contact: "76 01 39 89",
     site: "string"
    },
    {
     nomentr: "ORIENT AGRICOLE DISTRIBUTION SARL" ,
     image: "assets/img/orientagri.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus justo, viverra quis euismod tincidunt, hendrerit ac felis",
     adresse: "Bamako, Boulkassoumbougou",
     contact: "66 73 50 48",
     site: "string"
    },
    {
     nomentr: "AGRO TROPIC SARL" ,
     image: "assets/img/agrotropic.jpg",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus justo, viverra quis euismod tincidunt, hendrerit ac felis",
     adresse: "Bamako ACI 2000",
     contact: "20 22 06 05",
     site: "string"
    }
  ]
  


}
interface Entreprise {
  nomentr: string
  image: string
  description: string
  adresse: string
  contact: string
  site: string
}
