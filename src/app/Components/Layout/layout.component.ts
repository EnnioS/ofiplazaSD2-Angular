import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  activeSubMenu:boolean = false;
  activeMobileMenu:boolean = false;

  screenWidth!:number;

  footerImg!:string;

  anio:Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 769){
      this.activeMobileMenu = false;
    }else{
      this.activeMobileMenu = true;
    }

    this.footerImageResolution(this.screenWidth)
  }

  showSubMenu(){
    if(this.activeSubMenu){
      this.activeSubMenu = false;
    }else{
      this.activeSubMenu = true;
    }
  }


  showMobileMenu(){
   if(this.activeMobileMenu){
      this.activeMobileMenu = false;
    }else{
      this.activeMobileMenu = true;
    }
  }

  onResize(e:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 769){
      this.activeMobileMenu = false;
    }else{
      this.activeMobileMenu = true;
    }

    this.footerImageResolution(this.screenWidth)
  }

  footerImageResolution(res:number){
    if(this.screenWidth >= 990){
    this.footerImg = 'assets/img/footer-back-61.png';
    }else if(this.screenWidth < 990 && this.screenWidth >=760){
      this.footerImg = 'assets/img/footer-back-63.png';
    }else if(this.screenWidth < 760 && this.screenWidth >=585){
      this.footerImg = 'assets/img/footer-back-64.png';
    }else if(this.screenWidth < 585 && this.screenWidth >= 380){
      this.footerImg = 'assets/img/footer-back-65.png';
    }else if(this.screenWidth < 380){
      this.footerImg = 'assets/img/footer-back-66.png';
    }

   
  }

}
