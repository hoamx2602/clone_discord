import React from 'react';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { leaveRoom } from '../../../realtimeCommunication/socketConnection';

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {
    leaveRoom();
  };
  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
