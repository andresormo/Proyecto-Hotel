import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { RoomI } from "src/app/core/services/rooms/models/room.interface";
import { UserI } from "src/app/core/services/user-auth/models/user.model";



//VARIABLES
let capacity: number = 0;
let maxCapacity: number = 0;


// FORMULARIO DE USUARIOS
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

//FUNCION PARA SELECCIONAR LOS FILES DE LAS IMAGENES
let  arrayBase64function:string[]=[];


export function onFileSelectedFunction(event:Event, form?: FormGroup, arrayimg?: File[], arraybase64Component?:string[]){
  const target = event.target as HTMLInputElement;
  if(target.files && target.files.length){
    let base64Image: string;
    const file = target.files[0];
    const reader = new FileReader();
      reader.onload = () => {
        base64Image = reader.result as string;
        arrayBase64function.push(base64Image)
      };
      reader.readAsDataURL(file);
    if(arrayimg){
      arrayimg.push(file);
    } else form?.get('image')?.setValue(file)
  }
  if(arraybase64Component){
    arrayBase64function = arraybase64Component
  }
  return arraybase64Component
}

// FORMULARIO DE HABITACIONES

export function initFormRoom(element: RoomI | undefined, builderForm: FormBuilder ): FormGroup {
  return builderForm.group({
    name: new FormControl(element?.name || '', [Validators.required]),
    capacity: new FormControl(element?.capacity),
    description: new FormControl(element?.description || ''),
    beds: new FormArray([]),
    images: new FormArray([]),
  });
}

export function formDataRecovery(form?: FormGroup, arrayBeds?: string[], arrayimg?: File[]): FormData {
  const formData = new FormData();
  formData.append('name', form?.get('name')?.value);
  formData.append('capacity', form?.get('capacity')?.value);
  formData.append('description', form?.get('description')?.value);
  arrayBeds?.forEach((bed) => { formData.append('beds', bed); });
  arrayimg?.forEach((img)=>{ formData.append('images', img) })
  return formData;
}

export function toggleBedfunction(
  bedId: string,
  max: number,
  name: string,
  arrayBeds: string[],
  bedCounts: { [bedId: string]: number }
    ) {
  const index = arrayBeds.indexOf(bedId);

    if (index !== -1 && name === 'remove') {
    arrayBeds.splice(index, 1);
    maxCapacity -= max;
    capacity = maxCapacity;
    bedCounts[bedId] = (bedCounts[bedId] || 0) - 1;
  } else if (name === 'add') {
    arrayBeds.push(bedId);
    maxCapacity += max;
    capacity = maxCapacity;
    bedCounts[bedId] = (bedCounts[bedId] || 0) + 1;
  }

  return capacity
}
