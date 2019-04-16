import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  isElementRoute: boolean;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.checkIfIsElementRoute();
  }
  checkIfIsElementRoute() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.isElementRoute = !this.router.isActive(`secure/element/${params.get("elementName")}`, true);
    });
  }
  ngOnInit() {
  }

}
