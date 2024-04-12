import { Component } from '@angular/core';
import { Personaje, Result } from '../model/personaje';
import { Helper } from '../service/helper';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private helper: Helper) {}

  datos: Personaje | undefined;
  favs: any[] = [];  

  ngOnInit(){
    this.helper.customMessage.subscribe((data: Result[]) => {
      this.favs = data;
    });
  }
  
  
  btnfav(id:number){
    var perId = this.favs.findIndex(item => item.id == id)
    this.favs.splice(perId, 1); 
  }

}
