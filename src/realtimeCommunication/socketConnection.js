import io from 'socket.io-client';
import store from '../store/store';
import {
  setFriends,
  setPendingFriendsInvitation,
  setOnlineUsers,
} from '../store/actions/friendsAction';
import { updateDirectChatHistoryIfActive } from '../shared/utils/chat';
import { newRoomCreated, updateActiveRooms } from './roomHandler';
import * as webRTCHandler from './webRTCHandler';

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
    store.dispatch(setPendingFriendsInvitation(pendingInvitations));
  });

  socket.on('friends-list', (data) => {
    const { friends } = data;

    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on('direct-chat-history', (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on('room-create', (data) => {
    newRoomCreated(data);
  });

  socket.on('active-rooms', (data) => {
    updateActiveRooms(data);
  });

  socket.on('conn-prepare', (data) => {
    const { connUserSocketId } = data;
    webRTCHandler.prepareNewPeerConnection(data, false);

    socket.emit('conn-init', {
      connUserSocketId,
    });
  });
};

export const sendDirectMessage = (data) => {
  console.log('DEBUG=================data', data);
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data) => {
  socket.emit('direct-chat-history', data);
};

export const createNewRoom = () => {
  socket.emit('room-create');
};

export const joinRoom = (data) => {
  socket.emit('room-join', data);
};

export const leaveRoom = (data) => {
  socket.emit('room-leave', data);
};
