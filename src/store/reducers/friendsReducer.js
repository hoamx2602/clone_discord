import { friendsActions } from '../actions/friendsAction';

const initState = {
  friends: [],
  pendingFriendsInvitation: [],
  onlineUsers: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITATION:
      return {
        ...state,
        pendingFriendsInvitation: action.pendingFriendsInvitation,
      };
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };
    default:
      return state;
  }
};

export default reducer;
