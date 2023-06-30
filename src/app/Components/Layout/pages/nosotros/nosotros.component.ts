import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  screenWidth!:number;
  isMobileScreen!:boolean;
  imgHead!:string;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    
    if(this.screenWidth <= 800){
      this.isMobileScreen = true;
    }else{
      this.isMobileScreen = false;
    }


    this.changeHeadermage(this.isMobileScreen)
  }


  onResize(e:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 800){
      this.isMobileScreen = true;
    }else{
      this.isMobileScreen = false;
    }

    this.changeHeadermage(this.isMobileScreen)
  }

  changeHeadermage(isMobilescreen:boolean){
    if(!isMobilescreen){
      this.imgHead = "assets/img/header-banner/header-banner-44.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/mobile-header-banner-07.jpg";
    }
  }

}
