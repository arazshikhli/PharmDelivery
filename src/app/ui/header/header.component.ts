import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout().subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
