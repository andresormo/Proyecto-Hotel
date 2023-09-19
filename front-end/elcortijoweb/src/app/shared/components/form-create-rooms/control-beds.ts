
import { FormBuilder, FormGroup } from "@angular/forms";

export function bedFunctionControl(
  bedId: string,
  max: number,
  formSucces:boolean,
  roomForm:FormGroup,
  builder: FormBuilder,
  arrayBeds:string[],
  capacityValue: number,
  maxCapacity: number
  ) {
  const index = arrayBeds.indexOf(bedId);
  console.log(capacityValue);

  if (index !== -1) {
    arrayBeds.splice(index, 1);
    maxCapacity -= max;
  } else {
    arrayBeds.push(bedId);
    maxCapacity += max;
  }

  if(maxCapacity > capacityValue){
    const bedControls = arrayBeds.map((bedId) => builder.control(bedId));
    roomForm.setControl('beds', builder.array(bedControls));
    formSucces=true;
  } else{
    formSucces = false;
  }

}
