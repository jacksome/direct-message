import account from '../../api/account'
import * as types from '../mutation-types'


export const login = ({ dispatch }, username, password, cb) => {
  account.login(
    username, password,
    (data, reason) => {
      dispatch(types.LOGIN, data)
      cb(reason)
    },
    (reason) => cb(reason)
  )
}

export const auth = ({ dispatch }, cb, errorCb) => {
  account.auth(
    (data) => {
      dispatch(types.LOGIN, data)
      cb()
    },
    (reason) => errorCb()
  )
}

export const register = ({ dispatch }, username, password, cb) => {
  account.register(
    username, password,
    (data, reason) => {
      dispatch(types.LOGIN, data);
      cb(reason);
    },
    (reason) => { cb(reason) }
  )
}

export const logout = ({ dispatch }) => {
  console.log("logout")
  account.logout(() => dispatch(types.LOGOUT))
}


