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
    this.drugs=this.drugService.drugs;
    console.log(this.user$)
  }
 
}
