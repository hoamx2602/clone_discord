import { useState } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  heigth: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Input = styled('input')({
  backgroundColor: '#2f3136',
  height: '98%',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0 10px',
});

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState('');

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    console.log('DEBUG=================Sending message to server');
    setMessage('');
  };
  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

export default connect(mapStoreStateToProps)(NewMessageInput);
