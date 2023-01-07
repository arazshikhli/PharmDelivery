import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
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
  isFixedNavbar:boolean;
  @HostBinding('class.navbar-opened') navbarOpened = false;
  count=this.drugService.getSum()
  user$=this.usersService.currentUserProfile$

  constructor(public auth:AuthentificationService,
    private router:Router,
    public usersService:UsersService,
    public drugService:DrugService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(offset > 10) {
      this.isFixedNavbar = true;
    } else {
      this.isFixedNavbar = false;
    }
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
  ngOnInit(): void {
  }


  logout() {
    this.auth.logout().subscribe(()=>{
      this.router.navigate(['/'])
    })
  }

  OnToggleSlideNav() {

  }
}
