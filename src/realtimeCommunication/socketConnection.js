import io from 'socket.io-client';
import store from '../store/store';
import { setPendingFriendsInvitation } from '../store/actions/friendsAction';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  socket = io('http://localhost:5002', {
    auth: {
      token: jwtToken,
    },
  });

  socket.on('connect', () => {
    console.log('successfully connected with socket.io server');
    console.log(socket.id);
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;
    console.log('friends invitation event came');
    console.log(pendingInvitations);
    store.dispatch(setPendingFriendsInvitation(pendingInvitations));
  });
};
