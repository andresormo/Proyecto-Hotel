import { map } from 'rxjs';
import { Component, Input } from '@angular/core';
import {
  AbstractControl,
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
export class FormCreateRoomsComponent {
  @Input() rooms?: RoomI;
  public roomForm?: FormGroup;
  public imagesForm?: FormGroup;
  public beds?: BedI[];
  public arrayBeds: string[] = [];
  public arrayimg: any[] = [];
  public maxCapacity: number = 0;
  public capacityValue: number = 0;
  public formError: boolean = false;
  // public submitSucces: boolean = false;
  public bedCounts: { [bedId: string]: number } = {};

  constructor(
    private fb: FormBuilder,
    private bedService: BedsService,
    private roomService: RoomService
  ) {
    this.bedService.getAllBeds().subscribe((bed: BedI[]) => {
      this.beds = bed;
    });
    this.initForm();
  }
  public async submitForm() {
    if (this.roomForm?.valid) {
      this.createRoom();
      this.roomForm?.reset();
      this.arrayBeds = [];
      this.bedCounts = {};
    }
  }
  public createRoom() {
      this.roomService.createRoom(this.formDataRecovery()).subscribe();
  }

  public initForm() {
    this.roomForm = this.fb.group({
      name: new FormControl(this.rooms?.name || '', [Validators.required]),
      capacity: new FormControl(this.rooms?.capacity),
      description: new FormControl(this.rooms?.description || ''),
      beds: this.fb.array([]),
      images: this.fb.array([]),
    });
  }

  public formDataRecovery() {
    const formData = new FormData();

    formData.append('name', this.roomForm?.get('name')?.value);
    formData.append('capacity', this.roomForm?.get('capacity')?.value);
    formData.append('despcription', this.roomForm?.get('capacity')?.value);
      this.arrayBeds.forEach((bed) => {
        formData.append('beds', bed);
      });


      this.arrayimg.forEach((img)=>{
        formData.append('images', img)
      })
    console.log(formData);

    return formData;
  }

  public onfileSelectImg(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      const file = target.files[0];
      this.arrayimg.push(file);
    }
    console.log(this.arrayimg);

  }

  public toggleBed(bedId: string, max: number, name: string) {
    const index = this.arrayBeds.indexOf(bedId);

    if (index !== -1 && name === 'remove') {
      this.arrayBeds.splice(index, 1);
      this.maxCapacity -= max;
      this.capacityValue = this.maxCapacity;
      this.bedCounts[bedId] = (this.bedCounts[bedId] || 0) - 1;
    } else if (name === 'add') {
      this.arrayBeds.push(bedId);
      this.maxCapacity += max;
      this.capacityValue = this.maxCapacity;
      this.bedCounts[bedId] = (this.bedCounts[bedId] || 0) + 1;
    }
    this.roomForm?.setControl('capacity', this.fb.control(this.capacityValue));
  }
}
