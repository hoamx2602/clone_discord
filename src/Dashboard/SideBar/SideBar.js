import { styled } from '@mui/system';

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#202225',
});

function SideBar() {
  return <MainContainer></MainContainer>;
}

export default SideBar;
