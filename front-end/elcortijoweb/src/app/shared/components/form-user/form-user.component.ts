import { UserI } from './../../../core/services/user-auth/models/user.model';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserAuthService } from 'src/app/core/services/user-auth/user-auth.service';
import { formDataFunction, initForm, onFileSelectedFunction } from '../functions/function-user-form';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent{

@Input() public user?: UserI;
  public registerForm?: FormGroup;
  public formData?: FormData;
  public succesUser: boolean = false;

  constructor(
    private userService: UserAuthService,
    private fb: FormBuilder,
  ){
    this.registerForm = initForm(this.user, this.fb);
  }

  public handleUser(): void{
    this.formData = formDataFunction(this.registerForm)
    if(this.registerForm?.valid){
      console.log(this.registerForm.value);

      this.createuser()
      this.succesUser=false
    } else{
      this.succesUser=true;
    }
  }

  public createuser(){
    if(this.formData){
      this.userService.register(this.formData).subscribe();
    }
  }

  public onFileSelected(event:Event){
   onFileSelectedFunction(event, this.registerForm)
  }

}
