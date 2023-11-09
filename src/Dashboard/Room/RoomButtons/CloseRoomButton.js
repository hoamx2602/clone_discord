import React from 'react';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const CloseRoomButton = () => {
  const handleLeaveRoom = () => {};
  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
