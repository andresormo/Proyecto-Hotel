import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BedsService } from 'src/app/core/services/beds/beds.service';
import { BedI } from 'src/app/core/services/beds/models/bed.interface';
import { RoomI } from 'src/app/core/services/rooms/models/room.interface';
import { RoomService } from 'src/app/core/services/rooms/room.service';


@Component({
  selector: 'app-form-create-rooms',
  templateUrl: './form-create-rooms.component.html',
  styleUrls: ['./form-create-rooms.component.scss'],
})
export class FormCreateRoomsComponent implements OnInit {

  @Input() rooms?: RoomI;
  public roomForm: FormGroup;
  public roomFormData?: FormData;
  public beds?: BedI[];
  public arrayBeds: string[] = [];
  public arrayimg: File[] = [];
  public maxCapacity: number = 0;
  public capacityValue: number = 0;
  public formSucces: boolean = false;
  public bedCounts: { [bedId: string]: number } = {};


  constructor(private fb: FormBuilder, private bedService: BedsService, private roomService: RoomService) {
    this.roomForm = this.fb.group({
      capacity: new FormControl(this.rooms?.capacity || '', [
        Validators.required,
      ]),
      description: new FormControl(this.rooms?.description || ''),
      beds: new FormControl(this.rooms?.beds||''),
      images: new FormControl(this.rooms?.images||''),
    });
  }

  public formDatafuntion(): FormData{
    const newFormData = new FormData();
    newFormData.append('capacity', this.roomForm.get('capacity')?.value);
    newFormData.append('description', this.roomForm.get('description')?.value);

    const bedsArray = this.roomForm.get('beds')?.value;

    // Agregar cada elemento del arreglo como un elemento separado en 'beds'
    bedsArray.forEach((bed:string) => {
      newFormData.append('beds', bed);
    });

    newFormData.append('images', this.roomForm.get('images')?.value);

    return newFormData;
  }

  ngOnInit(): void {
    this.bedService.getAllBeds().subscribe((bed: BedI[]) => {
      this.beds = bed;
    });
  }

  public toggleBed( bedId: string, max: number, name: string,) {
    const index = this.arrayBeds.indexOf(bedId);

    if (index !== -1 && name === "remove") {
      this.arrayBeds.splice(index, 1);
      this.maxCapacity -= max;
      this.capacityValue = this.maxCapacity;
      this.bedCounts[bedId] = (this.bedCounts[bedId] || 0) - 1;
    } else if( name === "add"){
      this.arrayBeds.push(bedId);
      this.maxCapacity += max;
      this.capacityValue = this.maxCapacity;
      this.bedCounts[bedId] = (this.bedCounts[bedId] || 0) + 1;
    }

    if (this.maxCapacity >= this.capacityValue) {
      const bedControls = this.arrayBeds.map((bedId) => this.fb.control(bedId));
      this.roomForm.setControl('beds', this.fb.array(bedControls));
      this.formSucces = true;
    } else {
      this.formSucces = false;
    }

  }

  public onfileSelectImg(event:Event){
    const target = event.target as HTMLInputElement;
    if(target.files && target.files.length){
      const file = target.files[0];
      this.arrayimg.push(file)
    }
    this.roomForm.setControl('images', this.fb.array(this.arrayimg));

  }

  submitForm() {
    this.roomFormData = this.formDatafuntion();
    if(this.roomForm.valid){
      this.createRoom()
    }
  }

  public createRoom(){
    if(this.roomFormData){
      this.roomService.createRoom(this.roomFormData).subscribe();
    }
  }
}
