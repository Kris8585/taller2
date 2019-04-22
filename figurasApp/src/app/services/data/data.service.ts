import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  saveUsuario(user: Usuario) { 
    this.angularFirestore.collection<Usuario>('users').add(user)
     
  }
  getUsuarioByEmail(email: string): Observable<Usuario[]> {
    return  this.angularFirestore.collection<Usuario>('users', ref => ref.where('email', '==', email)).valueChanges();
 
  }
  

  constructor(private angularFirestore: AngularFirestore) {
  }
  getAllElementos(): Observable<Elemento[]> {
    return this.angularFirestore.collection<Elemento>('shapes').valueChanges();
  }
  getFormulasToElemento() {
    return this.angularFirestore.doc<Elemento>('shapes')
      .collection<Formula>('formulas').valueChanges();
  }
  getElementosByName(term: string): Observable<Elemento[]> { 
      return  this.angularFirestore.collection<Elemento>('shapes', ref => ref.where('nombre', '==', term)).valueChanges();
  }
  deleteElemento(elemento: Elemento) { 
    this.angularFirestore.collection<Elemento>('shapes').doc(elemento.id).delete();
  }


  saveElemento(elemento: Elemento) {
    if (elemento.id) {
      this.angularFirestore.collection<Elemento>('shapes').add(elemento)

    } else {
      elemento.id = this.angularFirestore.createId();
      
      this.angularFirestore.collection<Elemento>('shapes').doc(elemento.id).set(elemento);
    }  
  }

}


