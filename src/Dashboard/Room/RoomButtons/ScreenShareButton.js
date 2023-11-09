import { ScreenShare as ScreenShareIcon, StopScreenShare as StopScreenShareIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

const ScreenShareButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenShareToggle = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };
  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: 'white' }}>
      {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
