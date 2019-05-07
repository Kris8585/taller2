import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  elementName: string;
  elemento: Elemento;
  paramSuscription: Subscription;
  elementoSuscription: Subscription;
  sectionShowed: string;
  isMath:boolean;

  constructor(private router: Router, private loginService: LoginService, private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.loadElementoByParameter();
    this.isMath=this.loginService.userHasRole('Math');
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.paramSuscription.unsubscribe();
    this.elementoSuscription.unsubscribe();
  }

  showSection(sectionName: string) {
    this.sectionShowed = sectionName;
  }

  resetSectionShowed() {
    this.showSection('');
  }

  goTo(route: string) {
    this.router.navigateByUrl(route);
  }

  loadElementoByParameter() {
    this.paramSuscription = this.activatedRoute.paramMap.subscribe((params) => {
      this.resetSectionShowed();
      this.elementName = params.get('elementName');
      this.elementoSuscription = this.dataService.getElementosByName(this.elementName).subscribe((elementos) => {
        this.elemento = elementos[0];
      });
    }
    );
  }

}
