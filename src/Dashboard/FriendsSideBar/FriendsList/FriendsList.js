import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const FriendsList = ({ friends }) => {
  return (
    <MainContainer>
      {friends.map((friend) => (
        <FriendsListItem
          username={friend.username}
          id={friend.id}
          key={friend.id}
          isOnline={friend.isOnline}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(FriendsList);
