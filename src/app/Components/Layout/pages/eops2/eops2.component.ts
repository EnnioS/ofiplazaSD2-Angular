import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eops2',
  templateUrl: './eops2.component.html',
  styleUrls: ['./eops2.component.scss']
})
export class Eops2Component implements OnInit {

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
      this.imgHead = "assets/img/header-banner/header-banner-47.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/eops2/mobile-header-banner-18.jpg";
    }
  }

}
