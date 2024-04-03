import { Component } from '@angular/core';
import { Personaje } from '../model/personaje';
import { Info } from '../model/info';
import { Result } from '../model/result';
import { Location } from '../model/location';

import { ListService } from '../service/list.service'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private apiservice: ListService) {}

  datos: Personaje[] = [];

  ionViewWillEnter() {
    console.log('tab 1');
    this.obtenerDatos();
  }

  obtenerDatos(){
       this.apiservice.getDatos().subscribe({
      next: res => {
        this.datos = res;
        console.log(res);
      },
      error: error => {
        console.error('Ha ocurrido un error', error);
      }
    });
  }
 

}
