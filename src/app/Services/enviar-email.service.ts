import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnviarEmail } from '../Interface/enviar-email';

@Injectable({
  providedIn: 'root'
})
export class EnviarEmailService {

  constructor(private http:HttpClient) { }

  EnviarEmail(){
    
  }
}
