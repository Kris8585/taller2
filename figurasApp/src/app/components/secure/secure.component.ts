import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {
  
  constructor(private router:Router) {
      
   }

  ngOnInit() {
  }
  goTo(route:string){
    this.router.navigateByUrl(route);

  }
}
