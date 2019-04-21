import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup; 

  constructor(private loginService:LoginService, private formBuilder:FormBuilder) {
    
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
  ngOnInit() {
  }
   
}
