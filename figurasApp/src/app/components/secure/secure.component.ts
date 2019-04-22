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

    this.userSuscription = this.loginService.getUser().subscribe((usuario) => {
      this.usuario = usuario;
    });
  }

  ngOnDestroy(): void {
    this.userSuscription.unsubscribe();
  }
  ngOnInit() {
  }
  logout() {
    this.loginService.logout();
  }
  goTo(route: string) {
    this.router.navigateByUrl(route);

  }
}
