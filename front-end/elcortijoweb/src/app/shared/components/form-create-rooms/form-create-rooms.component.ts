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

@Component({
  selector: 'app-form-create-rooms',
  templateUrl: './form-create-rooms.component.html',
  styleUrls: ['./form-create-rooms.component.scss'],
})
export class FormCreateRoomsComponent implements OnInit {
  @Input() rooms?: RoomI;
  public roomForm: FormGroup;
  public beds?: BedI[];
  public arrayBeds: string[] = [];
  public maxCapacity: number = 0;
  public capacityValue: number = 0;
  public formSucces: boolean = false;
  public bedCounts: { [bedId: string]: number } = {};
  constructor(private fb: FormBuilder, private bedService: BedsService) {
    this.roomForm = this.fb.group({
      capacity: new FormControl(this.rooms?.capacity || '', [
        Validators.required,
      ]),
      description: new FormControl(this.rooms?.description || ''),
      beds: this.fb.array([]),
      images: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.bedService.getAllBeds().subscribe((bed: BedI[]) => {
      this.beds = bed;
    });
  }
  get bedArray() {
    return this.roomForm.get('beds') as FormArray;
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

  submitForm() {
    console.log(this.roomForm.value);
  }
}
