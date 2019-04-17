import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  isElementRoute: boolean;
  constructor(private router: Router ) {
  
  } 
  ngOnInit() {
  }
  goTo(route:string){
    this.router.navigateByUrl(route);
  }
}
