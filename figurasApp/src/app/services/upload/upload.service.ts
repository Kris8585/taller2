import { Injectable } from '@angular/core';
import { Upload } from 'src/app/classes/upload.class';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { SnotifyService } from 'ng-snotify';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor( private angularFirestore:AngularFirestore, private snotifyService:SnotifyService) { } 
  private basePath:string = '/uploads'; 
  pushUpload(upload: Upload) {
     

    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  { 
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {  
        this.snotifyService.warning('Correo o contraseña incorrectos', 'Atención');
      },
      () => {  
        uploadTask.snapshot.ref.getDownloadURL().then( (downloadURL) =>{
 
          upload.url = downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
        });
        
      }
    );
  }
 
  private saveFileData(upload: Upload) {  
     const newDocument = {
      $key:this.angularFirestore.createId(),
      file:null,
      name:upload.name,
      url:upload.url,
      progress: upload.progress,  
      createdAt:upload.createdAt 
  }

    this.angularFirestore.collection<Upload>('documents').add(newDocument);
 
  }


  deleteUpload(upload: Upload) {
    this.deleteFileFirestore(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name)
    })
    .catch(error => console.log(error))
  }
 
  private deleteFileFirestore(id: string) { 
   return this.angularFirestore.collection<Upload>('documents').doc(id).delete(); 
  }
 
  private deleteFileStorage(name:string) {
    let storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete()
  }

}
