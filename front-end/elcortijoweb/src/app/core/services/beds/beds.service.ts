import { Injectable } from '@angular/core';
import { ApiBedsService } from './api/api-beds.service';
import { Observable } from 'rxjs';
import { BedI } from './models/bed.interface';

@Injectable({
  providedIn: 'root'
})
export class BedsService {

  constructor(
    private apibedService: ApiBedsService
  ) { }

    public getAllBeds(): Observable<BedI[]>{
      return this.apibedService.getApiBeds()
    }

}
