import { Component } from '@angular/core';
import { Personaje } from '../model/personaje';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private apiservice: ListService) {}

  datos: Personaje | undefined;

  ngOnInit(){
       this.apiservice.getDatos().subscribe((data: Personaje) => {
          this.datos = data;
          console.log(this.datos);
    });
  }

}
