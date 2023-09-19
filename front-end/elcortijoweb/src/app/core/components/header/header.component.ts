import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth/user-auth.service';
import { UserI } from '../../services/user-auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isUserRol: boolean = false;
  public isLogged: boolean = false;
  constructor(
    private userService: UserAuthService
  ){
    userService.isLogged$.subscribe((isLogged)=>this.isLogged = isLogged);
    userService.isUser$.subscribe((isUser)=> {
      if(isUser === 'user'){
        this.isUserRol === true;
    } else{
      this.isUserRol === false;
    }
  } )
}

public logOut(){
  this.userService.logOut()
}
}
