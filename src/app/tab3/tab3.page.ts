import { Component } from '@angular/core';
import { Personaje } from '../model/personaje';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private apiservice: ListService) {}

  datos: Personaje | undefined;

  ngOnInit(){
       this.apiservice.getDatos().subscribe((data: Personaje) => {
          this.datos = data;
          console.log(this.datos);
    });
  }

}
