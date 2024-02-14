import { IUserSingInResponse, UserI } from './models/user.model';


export const userMock:UserI={
  _id:'23344fjkvdfk',
  name:'Pepe',
  surname:'Orozco',
  email:'usuariofalso@gmail.com',
  password: '1234',
  rol: 'user',

}



export const userSingInResponseMock: IUserSingInResponse={
  userToLog: userMock,
  token:'token-prueba-jwt'
}


