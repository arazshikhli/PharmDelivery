import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Drugs, Tile } from 'src/app/model/interfaces';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DrugService } from 'src/app/services/drugs.service';
import { UsersService } from 'src/app/services/users.service';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, Swiper, SwiperOptions, A11y, Scrollbar } from 'swiper';
import { EventsParams, SwiperComponent } from 'swiper/angular';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual,A11y,Scrollbar]);


@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  user$=this.userService.currentUserProfile$


  drugs:Drugs[]=[]
  constructor(
    private auth:AuthentificationService,
    public userService:UsersService,
    public drugService:DrugService,
    private router:Router
    ) {
   
     }
     
  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1450: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
}
  ngOnInit(): void {
    this.drugs=this.drugService.drugs;
    console.log(this.user$)
  }
 goToAdvert(numb:number){
 
  this.router.navigate(['/advert-drug'])
 }
 setSwiperInstance(swiper: Swiper) {
  setInterval(() => {
    swiper?.slideNext();
  }, 4000);
}
}
