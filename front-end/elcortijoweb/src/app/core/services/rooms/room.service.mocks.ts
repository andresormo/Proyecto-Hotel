
import { BedI } from "../beds/models/bed.interface"
import { ApiRoom, RoomI } from "./models/room.interface"


export const bedMock: BedI = {
  _id:"string",
  type:"string",
  maxCapacity:2
}


const arrayBedsMocsk: BedI[]= [
  bedMock,
  bedMock
]

export const ApiRoomMocks: ApiRoom = {
  _id:"string",
  name:"string",
  images:["string"],
  beds:arrayBedsMocsk,
  capacity:3,
  description:"string"
  }

  export const RoomMock: RoomI = {
    _id:"string",
    name:"string",
    images:["string"],
    beds:arrayBedsMocsk,
    capacity:2,
    description:"string"
  }




