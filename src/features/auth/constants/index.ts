// Interfaces
import { type IInitAuthState } from './interface'

export const INIT_AUTH_STATE: IInitAuthState = {
  auth: {
    accessToken: null,
    userData: {},
    isLogin: false
  }
}
