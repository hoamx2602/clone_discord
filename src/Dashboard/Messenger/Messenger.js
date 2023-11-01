import { styled } from '@mui/system';

const MainContainer = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393f',
  marginTop: '48px',
  display: 'flex',
});

function Messenger() {
  return <MainContainer></MainContainer>;
}

export default Messenger;
