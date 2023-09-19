import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { max } from 'rxjs';
import { BedsService } from 'src/app/core/services/beds/beds.service';
import { BedI } from 'src/app/core/services/beds/models/bed.interface';
import { RoomI } from 'src/app/core/services/rooms/models/room.interface';
import { bedFunctionControl } from './control-beds';

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
  public formSucces:boolean = false;

  constructor(
    private fb: FormBuilder,
    private bedService: BedsService
    ) {
    this.roomForm = this.fb.group({
      capacity: new FormControl(this.rooms?.capacity || '', [Validators.required]),
      description: new FormControl(this.rooms?.description || ''),
      beds: this.fb.array([]),
      images:  this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.bedService.getAllBeds().subscribe((bed: BedI[])=> {
      this.beds = bed
    })
  }
  get bedArray() {
    return this.roomForm.get('beds') as FormArray;
  }

  public toggleBed(bedId:string, max:number ){
   bedFunctionControl(
    bedId,
    max,
    this.formSucces,
    this.roomForm,
    this.fb,
    this.arrayBeds,
    this.capacityValue,
    this.maxCapacity
    )
  }

  submitForm() {
    console.log(this.roomForm.value);
  }
}
