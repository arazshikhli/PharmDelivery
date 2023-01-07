import { Component } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  user$=this.userService.currentUserProfile$
constructor(public userService:UsersService) {
}
}
