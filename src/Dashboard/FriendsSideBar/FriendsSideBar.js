import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendTitle from './FriendTitle';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';
import FriendsList from './FriendsList/FriendsList';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2f3136',
});

function FriendsSideBar() {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendTitle title="Private Messages" />
      <FriendsList />
      <FriendTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
}

export default FriendsSideBar;
