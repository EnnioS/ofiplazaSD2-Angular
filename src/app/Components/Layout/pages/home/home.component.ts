import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  screenWidth!:number;
  isMobileScreen!:boolean;
  
 slides:any = [];

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
  title = 'slide de imagenes';

  
  
  bannerHomeSlder: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 800,
    autoplay:true,
    autoplaySpeed:500,
    navText: ['<img src="assets/img/icons/left-arrow.svg">', '<img src="assets/img/icons/right-arrow.svg">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  
  changeHeadermage(isMobilescreen:boolean){
    if(!isMobilescreen){
      this.slides = []
      this.slides = [
        {id: 1, img: "assets/img/home/slide-52.jpg"},
        {id: 2, img: "assets/img/home/slide-53.jpg"},
        {id: 3, img: "assets/img/home/slide-55.jpg"}
      ]; 
    }else if(isMobilescreen){
      this.slides = []
      this.slides = [
        {id: 1, img: "assets/img/eops1/mobile-header-banner-17.jpg"},
        {id: 2, img: "assets/img/foodcourt/mobile-header-banner-11.jpg"},
        {id: 3, img: "assets/img/workplace/mobile-header-banner-12.jpg"}
      ];
    }
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
}
