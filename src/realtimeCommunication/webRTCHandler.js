import { setLocalStream } from '../store/actions/roomAction';
import store from '../store/store';

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
