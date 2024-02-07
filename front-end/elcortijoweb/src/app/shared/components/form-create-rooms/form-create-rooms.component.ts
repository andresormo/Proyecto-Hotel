import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BedsService } from 'src/app/core/services/beds/beds.service';
import { BedI } from 'src/app/core/services/beds/models/bed.interface';
import { RoomI } from 'src/app/core/services/rooms/models/room.interface';
import { RoomService } from 'src/app/core/services/rooms/room.service';
import {
  formDataRecovery,
  initFormRoom,
  onFileSelectedFunction,
  toggleBedfunction,
} from '../functions/function-user-form';

@Component({
  selector: 'app-form-create-rooms',
  templateUrl: './form-create-rooms.component.html',
  styleUrls: ['./form-create-rooms.component.scss'],
})
export class FormCreateRoomsComponent implements OnInit{
  public roomForm?: FormGroup;
  public formData?: FormData;

  @Output() connect = new EventEmitter();
  public confirmClosedModal?: boolean;

  public rooms?: RoomI;
  public beds?: BedI[];
  public arrayBeds: string[] = [];
  public arrayimg: File[] = [];
  public arraybase64: string[]= [];
  public bedCounts: { [bedId: string]: number } = {};

  public maxCapacity: number = 0;
  public capacityValue: number = 0;

  public formError: boolean = false;
  public submitSucces: boolean = false;
  public ImgError: boolean= false;

  constructor(
    private fb: FormBuilder,
    private bedService: BedsService,
    private roomService: RoomService
  ) {}

ngOnInit(): void {
  this.bedService.getAllBeds().subscribe((bed: BedI[]) => {
    this.beds = bed;
  });

  this.roomForm = initFormRoom(this.rooms, this.fb);
}


//Manejo de modales, envio de informacion entre componentes
public getAnswer(answer: boolean){
  this.connect.emit(answer);
  answer ? this.openConfirm(!answer) : this.openConfirm(answer);
}

public openConfirm(open:boolean){
  this.confirmClosedModal = open;
}

//-------------------- Submit de la accion-----
  public submitForm() {
    this.formData = formDataRecovery(
      this.roomForm, this.arrayBeds, this.arrayimg
    );
    if (this.roomForm?.valid) {
      this.createRoom();
      this.resetForm();
      this.submitSucces = true;
      this.formError = false;
    } else {
      this.formError = true;
      this.submitSucces = false;
    }
  }

  public createRoom() {
    this.formData ? this.roomService.createRoom(this.formData).subscribe() : null
  }

  public resetForm() {
    this.roomForm?.reset();
    this.arrayBeds =[];
    this.arrayimg= [];
    this.arraybase64=[];
    this.bedCounts={}

  }

  //Seleccionar files
  public onFileSelectImg(event: Event) {
      onFileSelectedFunction(event, this.roomForm, this.arrayimg, this.arraybase64);

      if(this.arraybase64.length > 9){
        this.ImgError = true
        this.formError= true
      }
  }

//Seleccionar o aumentar el numero de camas
  public toggleBed(bedId: string, max: number, name: string) {
    this.maxCapacity += max;

    this.capacityValue = toggleBedfunction(
      bedId, max, name, this.arrayBeds, this.bedCounts
    );

    this.capacityValue > this.maxCapacity? this.formError= true : this.updateCapacity();
  }

  public updateCapacity() {
    this.roomForm?.setControl('capacity', this.fb.control(this.capacityValue));
  }

  //Eliminar imagenes precargadas
  public deleteImg(index:number){
    this.arraybase64.splice(index, 1)
  }

}
