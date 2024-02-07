import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
@Output() connection = new EventEmitter;
@Output() confirmCloseModal = new EventEmitter;

  public confirmAction(action:string){
    if(action==='accept'){
      this.connection.emit(false);
    } else{
      this.confirmCloseModal.emit(false);
      this.connection.emit(true);
    }
  }
}
