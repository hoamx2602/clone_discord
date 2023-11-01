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

  socket.on('friend-invitations', (data) => {
    const { pendingInvitations } = data;
    store.dispatch(setPendingFriendsInvitation(pendingInvitations));
  });
};
