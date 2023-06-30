import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/Services/email.service';
import { Observable } from "rxjs";
import { AlertService } from '../Utilities/alert';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  FormData:FormGroup;
  tituloAccion:string = "Enviar";

  screenWidth!:number;
  isMobileScreen!:boolean;
  imgHead!:string;

  //alert optional
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  constructor(private builder:FormBuilder, private contact: EmailService, public alert:AlertService) { 
    this.FormData = this.builder.group({
      name:['', Validators.required],
      email: ['', [Validators.compose([Validators.required, Validators.email])]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      to: ['ventas@infodesarrollos.com']
    });
  }

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
      this.imgHead = "assets/img/header-banner/header-banner-45.jpg";
    }else if(isMobilescreen){
      this.imgHead = "assets/img/mobile-header-banner-08.jpg";
    }
  }

  onSubmit(formData:FormGroup){
    console.log(formData);
    this.contact.SendEmail(formData).subscribe({
      next: (response) =>{
        if(response){
          console.log("sevice: Email enviado, , respuesta: " + response);
          this.alertMessages(response)
          this.FormData = this.builder.group({
            name:['',],
            email: ['',],
            subject: ['',],
            message: ['',]
          });
        }
      },
      error: (response) => {
        if(response){
          console.log("sevice: No hay respuesta, error: " + response);
          this.alertMessages(response)
        }
      }
    });
  }


  alertMessages(response:any):void{
    if(response){
      this.alert.success('El correo fue enviado exitosamente', this.options);
    } else if(!response){
      this.alert.error('El correo no pudo ser enviado', this.options);
    } else{
      this.alert.info('El correo no pudo ser enviado, no hay conexión hacia el servidor', this.options);
    }

    
  }
}
