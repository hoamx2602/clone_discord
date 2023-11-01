import { styled } from '@mui/system';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2f3136',
});

function FriendsSideBar() {
  return <MainContainer></MainContainer>;
}

export default FriendsSideBar;
