import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { DrugService } from 'src/app/services/drugs.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count=this.drugService.getSum()
  user$=this.usersService.currentUserProfile$
  constructor(public auth:AuthentificationService,
    private router:Router,
    public usersService:UsersService,
    public drugService:DrugService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout().subscribe(()=>{
      this.router.navigate(['/'])
    })
  }
}
