import { Component, OnInit } from '@angular/core';
import { Drugs, Tile } from 'src/app/model/interfaces';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DrugService } from 'src/app/services/drugs.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  user$=this.userService.currentUserProfile$
  
  drugs:Drugs[]=[]
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
