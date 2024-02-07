import { ApiRoom } from "../../rooms/models/room.interface"
import { UserI } from "../../user-auth/models/user.model"


export interface ApiBooking{
  _id: string,
  user: UserI[],
  dateIn: Date,
  dateOut:Date,
  room:ApiRoom,
  persons:number,
  ceatedAt?:Date,
  updateUp?:Date,
  __v?:number

}

export interface BookingI{
  _id: string,
  user: UserI[],
  dateIn: Date,
  dateOut:Date,
  room:ApiRoom,
  persons:number
}
