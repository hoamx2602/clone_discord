import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { logout } from '../../shared/utils/auth';
import { getActions } from '../../store/actions/roomAction';
import { connect } from 'react-redux';

const DropdownMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  };

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: 'white' }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnlyChange}>
          {audioOnly ? 'Audio Only Enabled' : 'Audio Only Disabled'}
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(DropdownMenu);
