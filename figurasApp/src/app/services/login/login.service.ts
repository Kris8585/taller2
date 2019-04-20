import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  titulo$:Subject<string>;

constructor() { 
     this.titulo$ = new Subject<string>();
  }

  getTitulo(): Observable<string> {
    return this.titulo$; 
   
  }
  setTitulo(titulo:string) {  
   this.titulo$.next(titulo); 
  }
  
}
