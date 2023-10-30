import { Fragment } from 'react';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useHistory } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const getFormNotValidMessage = () => {
  return 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 characters. Also correct email address should provided';
};

const getFormValidMessage = () => {
  return 'Press to register!';
};

function RegisterPageFooter({ handleRegister, isFormValid }) {
  const history = useHistory();

  const handlePushToRegisterPage = (event) => {
    history.push('/login');
  };
  return (
    <Fragment>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        redirectText="Already have an account? "
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </Fragment>
  );
}

export default RegisterPageFooter;
