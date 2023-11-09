import { Mic as MicIcon, MicOff as MicOffIcon } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(true);

  const handleToggleMic = () => {
    setMicEnabled(!micEnabled);
  };
  return (
    <IconButton onClick={handleToggleMic} style={{ color: 'white' }}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
