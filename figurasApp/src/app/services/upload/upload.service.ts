import { Injectable } from '@angular/core';
import { Upload } from 'src/app/classes/upload.class';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { SnotifyService } from 'ng-snotify';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private angularFirestore: AngularFirestore, private snotifyService: SnotifyService
    , private dataService: DataService) { }
  private basePath: string = '/uploads';

  pushUpload(upload: Upload,  elementoNombre: string) {

    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        this.snotifyService.warning('Se ha presentado el siguiente error:' + error, 'Atención');
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

          upload.url = downloadURL;
          upload.name = upload.file.name;
          this.saveFileData(upload, elementoNombre);

        });

      }
    );
  }

  private saveFileData(upload: Upload, elementoNombre:string) {
       this.angularFirestore
    .collection<Elemento>('shapes', ref => ref.where('nombre', '==', elementoNombre))
    .snapshotChanges().subscribe((result:any) => {
      const id=result[0].payload.doc.id;
      if (id){ 
        
        this.dataService.getElementosByName(elementoNombre).subscribe((elementos:any) => {
         elementos[0].imagenes.push(upload.url);
        this.angularFirestore.collection<Elemento>('shapes').doc(id).set(elementos[0]); 
        this.snotifyService.success('Se ha actualizado la información del elemento','Información');
         });
      } else{
        this.snotifyService.warning('No se logro encontrar el elemento para asociar a esta imagen','Atención');
      }
    });
    
  }


  deleteUpload(upload: Upload) {
    this.deleteFileFirestore(upload.$key)
      .then(() => {
        this.deleteFileStorage(upload.name)
      })
      .catch(error => console.log(error))
  }

  private deleteFileFirestore(id: string) {
    return this.angularFirestore.collection<Upload>('documents').doc(id).delete();
  }

  private deleteFileStorage(name: string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }

}
