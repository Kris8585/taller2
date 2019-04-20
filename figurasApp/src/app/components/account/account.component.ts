import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  titulo: string;
  titleSuscription: Subscription;

  constructor(private loginService: LoginService) {
    this.titleSuscription = this.loginService.getTitulo().subscribe((titulo) => {
      this.titulo = titulo;
    });
  }

  ngOnDestroy(): void {
    this.titleSuscription.unsubscribe();
  }

  ngOnInit() {
  }

}
