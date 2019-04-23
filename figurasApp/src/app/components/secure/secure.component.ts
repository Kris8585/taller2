import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  elementos$: Observable<any>;
  userSuscription: Subscription;
  usuario: Usuario;
   
  constructor(private router: Router, private dataService: DataService, private loginService: LoginService) {
    this.elementos$ = dataService.getAllElementos(); 
  }

  ngOnInit() {
    setTimeout(() => {
      this.usuario = this.loginService.getUsuario();
    }, 1000);
  }

  logout() {
    this.loginService.logout();
  }

  goTo(route: string) {
    this.router.navigateByUrl(route);

  }
}
