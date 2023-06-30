import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eops4',
  templateUrl: './eops4.component.html',
  styleUrls: ['./eops4.component.scss']
})
export class Eops4Component implements OnInit {

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
      this.imgHead = "assets/img/header-banner/header-banner-49.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/eops4/mobile-header-banner-20.jpg";
    }
  }

}
