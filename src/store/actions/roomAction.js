export const roomActions = {
  OPEN_ROOM: 'ROOM.OPEN_ROOM',
  SET_ROOM_DETAILS: 'ROOM.SET_ROOM_DETAILS',
  SET_ACTIVE_ROOMS: 'ROOM.SET_ACTIVE_ROOMS',
  SET_LOCAL_STREAMS: 'ROOM.SET_LOCAL_STREAMS',
  SET_AUDIO_ONLY: 'SET.SET_AUDIO_ONLY',
  SET_SCREEN_SHARE_STREAM: 'SET.SET_SCREEN_SHARE_STREAM',
};

export const getActions = (dispatch) => {
  return {
    setAudioOnly: (onlyAudio) => dispatch(setAudioOnly(onlyAudio)),
  };
};

export const setOpenRoom = (
  isUserRoomCreator = false,
  isUserInRoom = false
) => {
  return {
    type: roomActions.OPEN_ROOM,
    isUserRoomCreator: isUserRoomCreator,
    isUserInRoom,
  };
};

export const setRoomDetails = (roomDetails) => {
  return {
    type: roomActions.SET_ROOM_DETAILS,
    roomDetails,
  };
};

export const setActiveRooms = (activeRooms) => {
  return {
    type: roomActions.SET_ACTIVE_ROOMS,
    activeRooms,
  };
};

export const setLocalStream = (localStream) => {
  return {
    type: roomActions.SET_LOCAL_STREAMS,
    localStream,
  };
};

export const setAudioOnly = (audioOnly) => {
  return {
    type: roomActions.SET_AUDIO_ONLY,
    audioOnly,
  };
};
