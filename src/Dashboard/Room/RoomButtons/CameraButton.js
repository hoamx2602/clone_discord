import { Videocam as VideocamIcon, VideocamOff as VideocamOffIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };
  return (
    <IconButton onClick={handleToggleCamera} style={{ color: 'white' }}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
