import { Typography } from '@mui/material';
import AuthBox from '../../shared/components/AuthBox';
import { useState, useEffect } from 'react';
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';

function RegisterPage() {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log(mail);
    console.log(username);
    console.log(password);
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

export default RegisterPage;
