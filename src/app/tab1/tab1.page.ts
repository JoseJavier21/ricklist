import { Component, OnInit } from '@angular/core';
import { Personaje, Result } from '../model/personaje';
import { ListService } from '../service/list.service';
import { Router } from '@angular/router'; 
import { Helper } from '../service/helper';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private apiservice: ListService, private router: Router, private helper: Helper) {}

  datos: Personaje | undefined;

  favoritos: Result[] = [];

  ngOnInit(){
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

  go2(){
    this.router.navigate(['/tabs/tab2']);
  }

  save(id: number){

    this.apiservice.getid(id).subscribe((data: Result) => {
      this.favoritos?.push(data);
      this.helper.changeMessage(this.favoritos);
    });
  }

  
}
