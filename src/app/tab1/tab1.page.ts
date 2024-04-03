import { Component } from '@angular/core';
import { Personaje } from '../model/personaje';
import { ListService } from '../service/list.service'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  datos: Personaje[] = [
    {
      id: 1,
      name: "Rick",
      status: "Alive",
      species: "Human",
      type: "Main",
      gender: "Male",
      origin: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Earth",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
      ],
      url: ""
    }
  ];

  ionViewWillEnter() {
    console.log('tab 1');
  this.obtenerDatos();
  }

  obtenerDatos() {
    console.log('obtenerDatos');
/*       this.apiservice.getDatos().subscribe({
      next: res => {
        this.datos = res;
        console.log(res);
      },
      error: error => {
        console.error('Ha ocurrido un error', error);
      }
    }); */
  }
 

}
