import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup; 

  constructor(private loginService:LoginService, private formBuilder:FormBuilder,
    private snotifyService:SnotifyService) {
    
    this.loginService.setTitulo('Create your free Account ');
    this.initForm(); 
   }

   initForm = () => {
    this.formGroup = this.formBuilder.group({ 
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    }); 
  }
  register() {
    if(this.formGroup.valid){ 
      const user:Usuario={
        'email':this.formGroup.value.email,
        'nombre':this.formGroup.value.name,
        'roles':'Viewer',
        'userId':null
      }
     this.loginService.register(user,this.formGroup.value.password);
    }else{ 
      this.snotifyService.warning('Nombre, Correo o contraseña incorrectos', 'No se puede guardar'); 
    } 
 }
  ngOnInit() {
  }
   
}
