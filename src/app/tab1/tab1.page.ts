import { Component, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { ListService } from '../service/list.service'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private apiservice: ListService) {}

  datos: Personaje | undefined;

  ngOnInit(){
       this.apiservice.getDatos().subscribe((data: Personaje) => {
          this.datos = data;
          console.log(this.datos);
    });
  }
 

}
