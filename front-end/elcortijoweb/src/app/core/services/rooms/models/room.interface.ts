import { BedI } from "../../beds/models/bed.interface"

export interface ApiRoom{
  _id:string,
  images:string[],
  beds:BedI[],
  capacity:number,
  description:string,
  ceatedAt?:Date,
  updateUp?:Date,
  __v?:number
  }

  export interface RoomI{
    _id:string,
    images:string[],
    beds:BedI[],
    capacity:number,
    description:string
  }

