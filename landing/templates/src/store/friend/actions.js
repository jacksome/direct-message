import friend from '../../api/friend'
import * as types from '../mutation-types'


export const getAllFriends = ({ dispatch }) => {
  friend.getAllFriends(
    (data, reason) => { dispatch(types.GET_FRIEND, data),
    (reason) => {}
    })
}

export const getFriendsChanged = ({ dispatch }, ts) => {
  friend.getFriendsChanged(
    ts,
    (data, t, reason) => { dispatch(types.MOD_FRIEND, data, t),
    (reason) => {}
    })
}

export const addFriend = ({ dispatch }, name, cb) => {
  friend.addFriend(
    name,
    (data, reason) => {
      dispatch(types.ADD_FRIEND, data)
      cb(reason)
    },
    (reason) => cb(reason)
  )
}

export const delFriend = ({ dispatch }, f, cb) => {
  friend.deleteFriend(
    f.friend_name,
    (data, reason) => {
      dispatch(types.DEL_FRIEND, f)
      cb(reason)
    },
    (reason) => cb(reason)
  )
}

