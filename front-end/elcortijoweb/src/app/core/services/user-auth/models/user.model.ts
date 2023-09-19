export interface UserI{
  _id: string,
  name:string,
  surname:string,
  email: string,
  password: string,
  image:string,
  rol:string,
  createdAt?: string,
  updateAt?: string,
  __v?: number
}

export interface IUserSingInResponse{
  userToLog: UserI,
  token: string
}


export interface UserRequestBody{
  name:string,
  surname: string,
  image?:string,
  email:string,
  password:string,
  rol:string
}
