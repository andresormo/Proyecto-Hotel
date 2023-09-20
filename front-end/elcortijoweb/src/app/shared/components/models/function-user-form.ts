import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserI } from "src/app/core/services/user-auth/models/user.model";



export function initForm(element: UserI | undefined, builder:FormBuilder): FormGroup{
  const passwordPattern = new RegExp(/(?=.*\d).{6,}/);

  return builder.group({
    name: new FormControl(element?.name || '', [Validators.required]),
    surname: new FormControl(element?.surname||'', [Validators.required]),
    image: new FormControl( element?.image || './../../../../../assets/images/businessman-avatar-profile-icon-business-person-symbol-vector.jpg'),
    email: new FormControl(element?.email||'', [Validators.required, Validators.email]),
    password: new FormControl(element?.password ||'',[Validators.required, Validators.minLength(8), Validators.pattern(passwordPattern)])
  })
}


export function formDataFunction(form?:FormGroup): FormData{
  const newFormData = new FormData();
  newFormData.append('name', form?.get('name')?.value);
  newFormData.append('surname', form?.get('surname')?.value);
  newFormData.append('image', form?.get('image')?.value);
  newFormData.append('email', form?.get('email')?.value);
  newFormData.append('password', form?.get('password')?.value);

  return newFormData;
}

export function onFileSelectedFunction(event:Event, form?: FormGroup){
  const target = event.target as HTMLInputElement;
  if(target.files && target.files.length){
    const file = target.files[0];
    form?.get('image')?.setValue(file)
  }
}
