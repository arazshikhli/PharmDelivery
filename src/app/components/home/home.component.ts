import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Drugs, Tile } from 'src/app/model/interfaces';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DrugService } from 'src/app/services/drugs.service';
import { UsersService } from 'src/app/services/users.service';
import SwiperCore, { Keyboard,
   Pagination,
    Navigation, 
    Virtual, Swiper, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  drugSubScription:Subscription
  user$=this.userService.currentUserProfile$
  slides$=new BehaviorSubject<string[]>([''])

  // slides=Array.from({length:1000}).map((el,index)=>`Slide ${index+1}`)
  drugs:Drugs[]
  constructor(
    private auth:AuthentificationService,
    private userService:UsersService,
    public drugService:DrugService,
    ) {
   
     }


  ngOnInit(): void {
    this.drugSubScription=this.drugService.getDrugs().subscribe((data)=>{
      this.drugs=data;
    this.slides$.next(
      Array.from({length:50}).map((el,index)=>`Slides ${index+1}`)
    )
  })
}
setSwiperInstance(swiper: Swiper) {
  setInterval(() => {
    swiper?.slideNext();
  }, 4000);
}
swiperConfig: any = {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: true,
  pagination: { clickable: true },
  scrollbar: { draggable: true },
}
config: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: true,
  pagination: { clickable: true },
  scrollbar: { draggable: true },
};

onSlideChange() {
  console.log('slide change');
}

AddToCart(drug:Drugs){
  this.drugService.addDrug(drug);
  this.swiper!.swiperRef.slideNext(1000);
}
slideNext(){
  this.swiper!.swiperRef.slideNext(1);
}
slidePrev(){
  this.swiper!.swiperRef.slidePrev(1);
}
}
