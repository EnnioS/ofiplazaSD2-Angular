import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  activeSubMenu:boolean = false;

  anio:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  showSubMenu(){
    if(this.activeSubMenu){
      this.activeSubMenu = false;
    }else{
      this.activeSubMenu = true;
    }
  }

}
