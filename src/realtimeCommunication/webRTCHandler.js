import Peer from 'simple-peer';
import { setLocalStream } from '../store/actions/roomAction';
import store from '../store/store';

const getConfiguration = () => {
  const turnIceServer = null;

  if (turnIceServer) {
    // TODO use TURN server credentials
  } else {
    console.warn('Using only STUN server');
    return {
      iceServer: [
        {
          urls: 'stun:stun.l.google.com:19302',
        },
      ],
    };
  }
};

const onlyAudioConstrains = {
  audio: true,
  video: false,
};

const defaultConstrains = {
  video: true,
  audio: true,
};

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
  const constrains = onlyAudio ? onlyAudioConstrains : defaultConstrains;

  navigator.mediaDevices
    .getUserMedia(constrains)
    .then((stream) => {
      store.dispatch(setLocalStream(stream));
      callbackFunc();
    })
    .catch((error) => {
      console.log('DEBUG=================getLocalStreamPreview', error);
    });
};

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
  const localStream = store.getState().room.localStream;

  if (isInitiator) {
    console.log(
      'DEBUG=================preparing new peer connection as initiator'
    );
  } else {
    console.log('preparing new peer connection as not initiator');
  }

  peers[connUserSocketId] = new Peer({
    initiator: isInitiator,
    config: getConfiguration(),
    stream: localStream,
  });

  peers[connUserSocketId].on('signal', (data) => {
    const signalData = {
      signal: data,
      connUserSocketId,
    };

    // TODO 
    // pass signaling data to other user
    // socketConnection.signalPeerData(signalData);

    peers[connUserSocketId].on('stream', (remoteStream) => {
        // TODO
        // add new remote stream to our server store
    })
  });
};
