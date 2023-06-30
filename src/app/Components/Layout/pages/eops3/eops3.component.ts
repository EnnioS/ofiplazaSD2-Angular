import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eops3',
  templateUrl: './eops3.component.html',
  styleUrls: ['./eops3.component.scss']
})
export class Eops3Component implements OnInit {

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
      this.imgHead = "assets/img/header-banner/header-banner-48.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/eops3/mobile-header-banner-19.jpg";
    }
  }

}
