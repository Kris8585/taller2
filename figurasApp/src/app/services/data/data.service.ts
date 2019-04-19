import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private angularFirestore:AngularFirestore) { 
  }
  getData(collectionName:string) : Observable<any[]> {
    return this.angularFirestore.collection(collectionName).valueChanges();
  }

}
