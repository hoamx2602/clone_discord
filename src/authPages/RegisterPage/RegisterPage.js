import { Typography } from '@mui/material';
import AuthBox from '../../shared/components/AuthBox';
import { useState, useEffect } from 'react';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getActions } from '../../store/actions/authAction';

function RegisterPage({ register }) {
  const history = useHistory();
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    const userDetails = {
      mail,
      password,
      username,
    };
    register(userDetails, history);
  };

  useEffect(() => {
    setIsFormValid(
      validateRegisterForm({
        mail,
        password,
        username,
      })
    );
  }, [mail, username, password, setIsFormValid]);
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: 'white' }}>
        Create an account!
      </Typography>
      <RegisterPageInput
        mail={mail}
        password={password}
        username={username}
        setMail={setMail}
        setPassword={setPassword}
        setUsername={setUsername}
      />
      <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
      />
    </AuthBox>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(RegisterPage);
