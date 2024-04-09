import { Component } from '@angular/core';
import { Personaje, Result } from '../model/personaje';
import { ListService } from '../service/list.service';
import { Helper } from '../service/helper';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private apiservice: ListService) {}

  datos: Personaje | undefined;

  busqueda: string = "";

  ngOnInit(){
    this.loadDatos();
  }

  loadDatos(){
    this.apiservice.getDatos().subscribe((data: Personaje) => {
      this.datos = data;
    });
  }

  nextPage() {
    if (this.datos?.info.next) {    
      this.apiservice.nextPage(this.datos.info.next).subscribe((data: Personaje) => {
        this.datos = data;
      });
    } else {
      console.log("No hay más páginas");
    }
  }
  
  prevPage(){

    if (this.datos?.info.prev) {    
      this.apiservice.nextPage(this.datos.info.prev).subscribe((data: Personaje) => {
        this.datos = data;
      });
    } else {
      console.log("No hay más páginas");
    }
  }

  search(){
    if(this.busqueda != ""){
      this.apiservice.getBusqueda(this.busqueda).subscribe((data: Personaje) => {
        this.datos = data;
      });
    } else {
      this.loadDatos();
    }
  }

}
