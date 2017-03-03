import message from '../../api/message'
import * as types from '../mutation-types'


export const getAllMessages = ({ dispatch }, f, cb) => {
  message.getAllMessages(
    f.friend_id,
    (data) => {
      dispatch(types.GET_MESSAGE, f, data);
      cb();
    },
    () => {}
  )
}

export const getNewMessages = ({ dispatch }, f) => {
  message.getNewMessages(
    f.friend_id,
    (data) => {
      dispatch(types.ADD_MULTI_MESSAGE, data);
    },
    () => {}
  )
}

export const sendMessage = ({ dispatch }, fid, content, cb) => {
  message.sendMessage(
    fid, content,
    (data, reason) => {
      dispatch(types.ADD_MESSAGE, data)
      cb(reason)
    },
    (reason) => cb(reason)
  )
}

export const delMessage = ({ dispatch }, m, cb) => {
  message.delMessage(
    m.id,
    (data, reason) => {
      dispatch(types.DEL_MESSAGE, m)
      cb()
    },
    () => {}
  )
}

