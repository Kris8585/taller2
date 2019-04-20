import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  constructor(private loginService:LoginService) {
    this.loginService.setTitulo('Need help with your account?');
   }

  ngOnInit() {
  }

}
