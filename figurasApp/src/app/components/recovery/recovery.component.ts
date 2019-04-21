import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  formGroup: FormGroup; 

  constructor(private loginService:LoginService, private formBuilder:FormBuilder) {
    this.loginService.setTitulo('Need help with your account?');
    this.initForm(); 
   }

   initForm = () => {
    this.formGroup = this.formBuilder.group({ 
      email: ['', [Validators.required, Validators.email]] 
    }); 
  }
  ngOnInit() {
  }

   
}
