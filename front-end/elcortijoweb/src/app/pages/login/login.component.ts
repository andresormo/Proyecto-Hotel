import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm?: FormGroup
  constructor(
    private authService: UserAuthService,
    private fb: FormBuilder
  ){
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    }
      )
  }

  public login(){
    if(this.loginForm?.valid){
      this.authService.login(this.loginForm.value).subscribe();
      this.loginForm.reset()
    }
  }
}
