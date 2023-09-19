import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { UserI } from '../../services/user-auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  public isLogged: boolean = false;
  constructor(
    private userService: UserAuthService
  ){
    userService.isLogged$.subscribe((isLogged)=>this.isLogged = isLogged)
  }

public logOut(){
  this.userService.logOut()
}
}
